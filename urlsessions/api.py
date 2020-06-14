from urlsessions.models import Session
from rest_framework import viewsets, permissions
from .serializers import SessionSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SessionSerializer