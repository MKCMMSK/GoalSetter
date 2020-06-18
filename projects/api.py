from projects.models import Project
from users.models import User
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

# Lead Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProjectSerializer

# user = User.objects.get(id=currentUserPk)
# queryset = user.project_set.all()