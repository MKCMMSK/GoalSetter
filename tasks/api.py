from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
from projects.models import Project
from rest_framework import request
import json

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    
    # project = Project.objects.get(id=2)
    # tasks = Task.objects.all()
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

    def get_duration(self):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        currentTask = Task.objects.get(id=deconstruct("taskId"))

        return currentTask