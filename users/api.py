from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    # queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    def get_queryset(self):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        currentProject = Project.objects.get(id = deconstruct["projectId"])
        listOfTasks = currentProject.task_set.all()
        
        return listOfTasks