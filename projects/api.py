from projects.models import Project
from users.models import User
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer
from rest_framework import request

# Lead Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    # should set id to current user id
    user = User.objects.get(id=1) 
    projects = user.project_set.all()
    queryset = projects

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

    # def get_queryset(self):
    #     return self.request.user.projects.all()


