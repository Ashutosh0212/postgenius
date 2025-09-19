"""
URL configuration for AI generation app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'generation-history', views.AIGenerationRequestViewSet)
router.register(r'brand-voice', views.BrandVoiceProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('generate-content/', views.GenerateContentView.as_view(), name='generate-content'),
    path('enhance-content/', views.EnhanceContentView.as_view(), name='enhance-content'),
    path('trending-topics/', views.TrendingTopicsView.as_view(), name='trending-topics'),
    path('generate-image/', views.GenerateImageView.as_view(), name='generate-image'),
]
