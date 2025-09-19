"""
Serializers for user authentication and management.
"""
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.utils import timezone
from datetime import timedelta
from .models import User, UserProfile, EmailVerification, PasswordResetToken, LoginAttempt


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    """
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = [
            'email', 'username', 'first_name', 'last_name', 
            'phone_number', 'password', 'password_confirm'
        ]
        extra_kwargs = {
            'email': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
        }
    
    def validate(self, attrs):
        """
        Validate that passwords match.
        """
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError("Passwords don't match.")
        return attrs
    
    def validate_email(self, value):
        """
        Validate that email is unique.
        """
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value
    
    def validate_username(self, value):
        """
        Validate that username is unique.
        """
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("A user with this username already exists.")
        return value
    
    def create(self, validated_data):
        """
        Create a new user and user profile.
        """
        validated_data.pop('password_confirm')
        password = validated_data.pop('password')
        
        user = User.objects.create_user(
            password=password,
            **validated_data
        )
        
        # Create user profile
        UserProfile.objects.create(user=user)
        
        # Create email verification token
        EmailVerification.objects.create(
            user=user,
            expires_at=timezone.now() + timedelta(hours=24)
        )
        
        return user


class UserLoginSerializer(serializers.Serializer):
    """
    Serializer for user login.
    """
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, attrs):
        """
        Validate user credentials.
        """
        email = attrs.get('email')
        password = attrs.get('password')
        
        if email and password:
            user = authenticate(username=email, password=password)
            if not user:
                raise serializers.ValidationError('Invalid email or password.')
            if not user.is_active:
                raise serializers.ValidationError('User account is disabled.')
            attrs['user'] = user
            return attrs
        else:
            raise serializers.ValidationError('Must include email and password.')


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for user profile.
    """
    full_name = serializers.ReadOnlyField()
    ai_generation_remaining = serializers.ReadOnlyField()
    is_subscription_active = serializers.ReadOnlyField()
    
    class Meta:
        model = UserProfile
        fields = [
            'bio', 'company', 'website', 'location', 'subscription_tier',
            'subscription_expires_at', 'ai_generation_limit', 'ai_generation_used',
            'social_accounts_limit', 'team_members_limit', 'full_name',
            'ai_generation_remaining', 'is_subscription_active'
        ]
        read_only_fields = [
            'subscription_tier', 'subscription_expires_at', 'ai_generation_limit',
            'ai_generation_used', 'social_accounts_limit', 'team_members_limit'
        ]


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for user information.
    """
    profile = UserProfileSerializer(read_only=True)
    full_name = serializers.ReadOnlyField()
    
    class Meta:
        model = User
        fields = [
            'id', 'email', 'username', 'first_name', 'last_name', 'full_name',
            'phone_number', 'avatar', 'timezone', 'is_verified', 'is_active',
            'created_at', 'updated_at', 'profile'
        ]
        read_only_fields = ['id', 'is_verified', 'is_active', 'created_at', 'updated_at']


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer for changing password.
    """
    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, validators=[validate_password])
    new_password_confirm = serializers.CharField(write_only=True)
    
    def validate(self, attrs):
        """
        Validate that new passwords match.
        """
        if attrs['new_password'] != attrs['new_password_confirm']:
            raise serializers.ValidationError("New passwords don't match.")
        return attrs
    
    def validate_old_password(self, value):
        """
        Validate old password.
        """
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect.")
        return value


class PasswordResetSerializer(serializers.Serializer):
    """
    Serializer for password reset request.
    """
    email = serializers.EmailField()
    
    def validate_email(self, value):
        """
        Validate that user exists.
        """
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No user found with this email address.")
        return value


class PasswordResetConfirmSerializer(serializers.Serializer):
    """
    Serializer for password reset confirmation.
    """
    token = serializers.UUIDField()
    new_password = serializers.CharField(validators=[validate_password])
    new_password_confirm = serializers.CharField()
    
    def validate(self, attrs):
        """
        Validate token and passwords.
        """
        token = attrs.get('token')
        new_password = attrs.get('new_password')
        new_password_confirm = attrs.get('new_password_confirm')
        
        if new_password != new_password_confirm:
            raise serializers.ValidationError("Passwords don't match.")
        
        try:
            reset_token = PasswordResetToken.objects.get(
                token=token,
                is_used=False
            )
            if reset_token.is_expired:
                raise serializers.ValidationError("Reset token has expired.")
            attrs['reset_token'] = reset_token
        except PasswordResetToken.DoesNotExist:
            raise serializers.ValidationError("Invalid or expired reset token.")
        
        return attrs


class EmailVerificationSerializer(serializers.Serializer):
    """
    Serializer for email verification.
    """
    token = serializers.UUIDField()
    
    def validate_token(self, value):
        """
        Validate verification token.
        """
        try:
            verification = EmailVerification.objects.get(
                token=value,
                is_used=False
            )
            if verification.is_expired:
                raise serializers.ValidationError("Verification token has expired.")
            return verification
        except EmailVerification.DoesNotExist:
            raise serializers.ValidationError("Invalid verification token.")


class LoginAttemptSerializer(serializers.ModelSerializer):
    """
    Serializer for login attempts (admin only).
    """
    user_email = serializers.CharField(source='user.email', read_only=True)
    
    class Meta:
        model = LoginAttempt
        fields = [
            'id', 'user_email', 'email', 'ip_address', 'user_agent',
            'success', 'failure_reason', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

