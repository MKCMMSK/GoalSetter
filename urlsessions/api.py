from urlsessions.models import URLSession
from rest_framework import viewsets, permissions
from .serializers import URLSessionSerializer

class URLSessionViewSet(viewsets.ModelViewSet):
    queryset = URLSession.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = URLSessionSerializer