"""
Views for user authentication and management.
"""
from rest_framework import generics, status, permissions, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import login, logout
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
from django.shortcuts import get_object_or_404
from datetime import timedelta
import logging

from .models import User, UserProfile, EmailVerification, PasswordResetToken, LoginAttempt
from .serializers import (
    UserRegistrationSerializer, UserLoginSerializer, UserSerializer,
    UserProfileSerializer, ChangePasswordSerializer, PasswordResetSerializer,
    PasswordResetConfirmSerializer, EmailVerificationSerializer, LoginAttemptSerializer
)

logger = logging.getLogger(__name__)


class RegisterView(generics.CreateAPIView):
    """
    User registration endpoint.
    """
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]
    
    def create(self, request, *args, **kwargs):
        """
        Create a new user account.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        # Send verification email
        try:
            verification = EmailVerification.objects.get(user=user, is_used=False)
            self._send_verification_email(user, verification.token)
        except EmailVerification.DoesNotExist:
            logger.warning(f"Email verification token not found for user {user.email}")
        
        return Response({
            'message': 'User registered successfully. Please check your email for verification.',
            'user': UserSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_201_CREATED)
    
    def _send_verification_email(self, user, token):
        """
        Send email verification email.
        """
        subject = 'Verify your PostGenius account'
        message = f"""
        Hi {user.first_name},
        
        Welcome to PostGenius! Please verify your email address by clicking the link below:
        
        {settings.FRONTEND_URL}/verify-email/{token}/
        
        This link will expire in 24 hours.
        
        If you didn't create this account, please ignore this email.
        
        Best regards,
        The PostGenius Team
        """
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
            logger.info(f"Verification email sent to {user.email}")
        except Exception as e:
            logger.error(f"Failed to send verification email to {user.email}: {e}")


class LoginView(APIView):
    """
    User login endpoint.
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """
        Authenticate user and return JWT tokens.
        """
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = serializer.validated_data['user']
        
        # Track login attempt
        self._track_login_attempt(user, request, success=True)
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        # Update last login
        user.last_login = timezone.now()
        user.save(update_fields=['last_login'])
        
        return Response({
            'message': 'Login successful',
            'user': UserSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_200_OK)
    
    def _track_login_attempt(self, user, request, success=False, failure_reason=''):
        """
        Track login attempt for security.
        """
        LoginAttempt.objects.create(
            user=user if success else None,
            email=request.data.get('email', ''),
            ip_address=self._get_client_ip(request),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            success=success,
            failure_reason=failure_reason
        )
    
    def _get_client_ip(self, request):
        """
        Get client IP address.
        """
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip


class LogoutView(APIView):
    """
    User logout endpoint.
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        """
        Logout user and blacklist refresh token.
        """
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class RefreshTokenView(APIView):
    """
    Refresh JWT token endpoint.
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """
        Refresh access token using refresh token.
        """
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            return Response({
                'access': str(token.access_token),
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Invalid refresh token'}, status=status.HTTP_400_BAD_REQUEST)


class ProfileView(generics.RetrieveUpdateAPIView):
    """
    User profile endpoint.
    """
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user


class ChangePasswordView(APIView):
    """
    Change password endpoint.
    """
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        """
        Change user password.
        """
        serializer = ChangePasswordSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        
        user = request.user
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        
        return Response({'message': 'Password changed successfully'}, status=status.HTTP_200_OK)


class PasswordResetView(APIView):
    """
    Password reset request endpoint.
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """
        Send password reset email.
        """
        serializer = PasswordResetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        user = User.objects.get(email=email)
        
        # Create password reset token
        reset_token = PasswordResetToken.objects.create(
            user=user,
            expires_at=timezone.now() + timedelta(hours=1)
        )
        
        # Send reset email
        self._send_reset_email(user, reset_token.token)
        
        return Response({
            'message': 'Password reset email sent successfully'
        }, status=status.HTTP_200_OK)
    
    def _send_reset_email(self, user, token):
        """
        Send password reset email.
        """
        subject = 'Reset your PostGenius password'
        message = f"""
        Hi {user.first_name},
        
        You requested a password reset for your PostGenius account.
        
        Click the link below to reset your password:
        
        {settings.FRONTEND_URL}/reset-password/{token}/
        
        This link will expire in 1 hour.
        
        If you didn't request this reset, please ignore this email.
        
        Best regards,
        The PostGenius Team
        """
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
            logger.info(f"Password reset email sent to {user.email}")
        except Exception as e:
            logger.error(f"Failed to send password reset email to {user.email}: {e}")


class PasswordResetConfirmView(APIView):
    """
    Password reset confirmation endpoint.
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """
        Confirm password reset.
        """
        serializer = PasswordResetConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        reset_token = serializer.validated_data['reset_token']
        new_password = serializer.validated_data['new_password']
        
        # Update user password
        user = reset_token.user
        user.set_password(new_password)
        user.save()
        
        # Mark token as used
        reset_token.is_used = True
        reset_token.save()
        
        return Response({
            'message': 'Password reset successfully'
        }, status=status.HTTP_200_OK)


class EmailVerificationView(APIView):
    """
    Email verification endpoint.
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        """
        Verify email address.
        """
        serializer = EmailVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        verification = serializer.validated_data['token']
        user = verification.user
        
        # Mark user as verified
        user.is_verified = True
        user.save()
        
        # Mark verification as used
        verification.is_used = True
        verification.save()
        
        return Response({
            'message': 'Email verified successfully'
        }, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    """
    User list endpoint (admin only).
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_stats(request):
    """
    Get user statistics.
    """
    user = request.user
    profile = user.profile
    
    stats = {
        'ai_generation_used': profile.ai_generation_used,
        'ai_generation_limit': profile.ai_generation_limit,
        'ai_generation_remaining': profile.ai_generation_remaining,
        'subscription_tier': profile.subscription_tier,
        'is_subscription_active': profile.is_subscription_active,
        'is_verified': user.is_verified,
        'created_at': user.created_at,
    }
    
    return Response(stats, status=status.HTTP_200_OK)