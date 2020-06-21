from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
from projects.models import Project
from rest_framework import request
from rest_framework.decorators import action
from rest_framework.response import Response
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

    @action(detail=True)
    def get_task(self, request, pk=None):
        deconstruct = json.loads(self.request.body.decode('ascii'))
        currentTask = Task.objects.get(id=deconstruct["taskId"])
        print(currentTask, "THIS IS TEST")
        serializer = self.get_serializer(currentTask)
        # return currentTask
        return Response(serializer.data)
