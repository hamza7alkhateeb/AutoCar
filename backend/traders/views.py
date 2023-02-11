from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import TradersSerializer
from .models import Traders

class TradersListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Traders.objects.all()
    serializer_class = TradersSerializer
    pagination_class =None

class TraderView(RetrieveAPIView):
    queryset = Traders.objects.all()
    serializer_class = TradersSerializer

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Traders.objects.filter(top_seller=True)
    serializer_class = TradersSerializer
    pagination_class =None
