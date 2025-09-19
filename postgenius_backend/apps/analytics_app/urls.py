"""
URL configuration for analytics app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'reports', views.PerformanceReportViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard-stats/', views.DashboardStatsView.as_view(), name='dashboard-stats'),
    path('engagement-metrics/', views.EngagementMetricsView.as_view(), name='engagement-metrics'),
    path('platform-performance/', views.PlatformPerformanceView.as_view(), name='platform-performance'),
    path('content-performance/', views.ContentPerformanceView.as_view(), name='content-performance'),
    path('audience-insights/', views.AudienceInsightsView.as_view(), name='audience-insights'),
    path('generate-report/', views.GenerateReportView.as_view(), name='generate-report'),
]
