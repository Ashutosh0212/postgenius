"""
URL configuration for content management app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'posts', views.ContentPostViewSet)
router.register(r'drafts', views.ContentDraftViewSet)
router.register(r'templates', views.ContentTemplateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('posts/<int:post_id>/approve/', views.ApprovePostView.as_view(), name='approve-post'),
    path('posts/<int:post_id>/reject/', views.RejectPostView.as_view(), name='reject-post'),
]
