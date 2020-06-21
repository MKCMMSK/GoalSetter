from urlsessions.models import URLSession
from rest_framework import viewsets, permissions
from .serializers import URLSessionSerializer
from tasks.models import Task
from rest_framework import request
from rest_framework.decorators import action
from rest_framework.response import Response
import json

class URLSessionViewSet(viewsets.ModelViewSet):
    queryset = URLSession.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = URLSessionSerializer

    @action(detail=True)
    def get_sessions_by_week(self, request, pk=None):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        print(deconstruct)
        beginningOfWeek = deconstruct["sunday"]
        endOfWeek = deconstruct["saturday"] 
        
        sessionsByWeek = Session.objects.filter(time_of_day__range[beginningOfWeek, endOfWeek])
        return deconstruct
