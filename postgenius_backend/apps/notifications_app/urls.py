"""
URL configuration for notifications app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'notifications', views.NotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('mark-read/', views.MarkAsReadView.as_view(), name='mark-read'),
    path('mark-all-read/', views.MarkAllAsReadView.as_view(), name='mark-all-read'),
    path('preferences/', views.NotificationPreferencesView.as_view(), name='preferences'),
]
