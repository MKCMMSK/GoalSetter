from sites.models import Site
from rest_framework import viewsets, permissions
from .serializers import SiteSerializer

class SiteViewSet(viewsets.ModelViewSet):
    queryset = Site.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SiteSerializer