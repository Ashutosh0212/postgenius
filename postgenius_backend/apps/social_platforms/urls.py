"""
URL configuration for social platforms app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'connected-accounts', views.ConnectedAccountViewSet)
router.register(r'platforms', views.SocialPlatformViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('connect-account/', views.ConnectAccountView.as_view(), name='connect-account'),
    path('refresh-token/', views.RefreshTokenView.as_view(), name='refresh-token'),
    path('platform-status/', views.PlatformStatusView.as_view(), name='platform-status'),
]
