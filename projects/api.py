from projects.models import Project
from users.models import User
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

# Lead Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    user = User.objects.get(id=1)
    queryset = user.project_set.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

