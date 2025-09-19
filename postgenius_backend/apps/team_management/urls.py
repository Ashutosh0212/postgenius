"""
URL configuration for team management app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'team-members', views.TeamMemberViewSet)
router.register(r'teams', views.TeamViewSet)
router.register(r'invitations', views.InvitationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('invite-member/', views.InviteMemberView.as_view(), name='invite-member'),
    path('permissions/', views.PermissionsView.as_view(), name='permissions'),
]
