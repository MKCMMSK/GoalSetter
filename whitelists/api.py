from whitelists.models import WhiteList
from rest_framework import viewsets, permissions
from .serializers import WhitelistSerializer

# Lead Viewset
class WhitelistViewSet(viewsets.ModelViewSet):
    queryset = WhiteList.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WhitelistSerializer
