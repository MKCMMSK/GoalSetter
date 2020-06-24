from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from rest_framework import request
from rest_framework.decorators import action
from rest_framework.response import Response
import json

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    def get_queryset(self):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        # currentProject = Project.objects.get(id = deconstruct["projectId"])
        # listOfTasks = currentProject.task_set.all()
        
        return 
    @action(detail=True)
    def checkForUser(self, request, pk=None):
        currentUserEmail = self.request.body.decode('ascii')
        print(currentUserEmail, "this is test")
        return Response(currentUserEmail)