from django.urls import path
from .views import TraderView, TradersListView, TopSellerView
urlpatterns = [
    path('',TradersListView.as_view()),
    path('<int:pk>',TraderView.as_view()),
    path('topseller',TopSellerView.as_view())
]
