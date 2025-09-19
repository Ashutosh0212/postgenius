"""
URL configuration for scheduling app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'scheduled-posts', views.ScheduledPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('calendar/', views.CalendarView.as_view(), name='calendar'),
    path('schedule-post/', views.SchedulePostView.as_view(), name='schedule-post'),
    path('optimal-times/', views.OptimalTimesView.as_view(), name='optimal-times'),
    path('bulk-schedule/', views.BulkScheduleView.as_view(), name='bulk-schedule'),
]
