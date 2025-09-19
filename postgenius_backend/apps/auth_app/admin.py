"""
Admin configuration for authentication models.
"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.html import format_html
from .models import User, UserProfile, EmailVerification, PasswordResetToken, LoginAttempt


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """
    Admin configuration for User model.
    """
    list_display = ['email', 'first_name', 'last_name', 'is_verified', 'is_active', 'created_at']
    list_filter = ['is_verified', 'is_active', 'is_staff', 'created_at']
    search_fields = ['email', 'first_name', 'last_name']
    ordering = ['-created_at']
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone_number', 'avatar', 'timezone')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_verified', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """
    Admin configuration for UserProfile model.
    """
    list_display = ['user', 'subscription_tier', 'ai_generation_used', 'ai_generation_limit', 'is_subscription_active']
    list_filter = ['subscription_tier', 'created_at']
    search_fields = ['user__email', 'user__first_name', 'user__last_name', 'company']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('User', {'fields': ('user',)}),
        ('Profile Info', {'fields': ('bio', 'company', 'website', 'location')}),
        ('Subscription', {'fields': ('subscription_tier', 'subscription_expires_at')}),
        ('Limits', {'fields': ('ai_generation_limit', 'ai_generation_used', 'social_accounts_limit', 'team_members_limit')}),
        ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    )


@admin.register(EmailVerification)
class EmailVerificationAdmin(admin.ModelAdmin):
    """
    Admin configuration for EmailVerification model.
    """
    list_display = ['user', 'token', 'created_at', 'expires_at', 'is_used', 'is_expired']
    list_filter = ['is_used', 'created_at', 'expires_at']
    search_fields = ['user__email']
    readonly_fields = ['token', 'created_at', 'expires_at', 'is_expired']
    
    def is_expired(self, obj):
        return obj.is_expired
    is_expired.boolean = True
    is_expired.short_description = 'Expired'


@admin.register(PasswordResetToken)
class PasswordResetTokenAdmin(admin.ModelAdmin):
    """
    Admin configuration for PasswordResetToken model.
    """
    list_display = ['user', 'token', 'created_at', 'expires_at', 'is_used', 'is_expired']
    list_filter = ['is_used', 'created_at', 'expires_at']
    search_fields = ['user__email']
    readonly_fields = ['token', 'created_at', 'expires_at', 'is_expired']
    
    def is_expired(self, obj):
        return obj.is_expired
    is_expired.boolean = True
    is_expired.short_description = 'Expired'


@admin.register(LoginAttempt)
class LoginAttemptAdmin(admin.ModelAdmin):
    """
    Admin configuration for LoginAttempt model.
    """
    list_display = ['email', 'user', 'ip_address', 'success', 'failure_reason', 'created_at']
    list_filter = ['success', 'created_at']
    search_fields = ['email', 'ip_address']
    readonly_fields = ['created_at']
    
    def has_add_permission(self, request):
        return False
    
    def has_change_permission(self, request, obj=None):
        return False