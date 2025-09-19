"""
URL configuration for billing app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'subscriptions', views.SubscriptionViewSet)
router.register(r'billing-history', views.BillingHistoryViewSet)
router.register(r'usage-tracking', views.UsageTrackingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('subscription/', views.CurrentSubscriptionView.as_view(), name='current-subscription'),
    path('upgrade-plan/', views.UpgradePlanView.as_view(), name='upgrade-plan'),
    path('usage/', views.UsageView.as_view(), name='usage'),
    path('payment-method/', views.PaymentMethodView.as_view(), name='payment-method'),
    path('invoices/', views.InvoicesView.as_view(), name='invoices'),
]
