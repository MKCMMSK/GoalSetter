from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
from projects.models import Project
from django.http import HttpRequest
# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    
    project = Project.objects.get(id=1)
    tasks = project.task_set.all()
    queryset = tasks
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer
