from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
from projects.models import Project
from rest_framework import request
import json

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    
    # project = Project.objects.get(id=1)
    # tasks = project.task_set.all()
    # queryset = tasks
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        currentProject = Project.objects.get(id = deconstruct["projectId"])
        listOfTasks = currentProject.task_set.all()
        
        return listOfTasks
