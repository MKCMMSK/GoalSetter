from events.models import Event
from rest_framework import viewsets, permissions
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EventSerializer


#/events/
# get total hours online of the week
# total hours on a project of the week