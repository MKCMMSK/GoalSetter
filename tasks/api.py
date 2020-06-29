from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
from projects.models import Project
from users.models import User
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

    # @action(detail=True)
    # def get_task(self, request, pk=None):
    #     deconstruct = json.loads(self.request.body.decode('ascii'))
    #     currentTask = Task.objects.get(id=deconstruct["taskId"])
    #     print(currentTask, "THIS IS TEST")
    #     serializer = self.get_serializer(currentTask)
    #     # return currentTask
    #     return Response(serializer.data)

    @action(detail=True)
    def get_all_tasks(self,request, pk=None):
        print(self.request.headers)
        print(self.request.query_params)

        deconstruct = self.request.query_params
        currentUser = User.objects.get(id=deconstruct["userId"])
        projectsList = currentUser.project_set.all()
        
        taskList = []
        for project in projectsList:
            serializer = self.get_serializer(project.task_set.all(), many=True)
            taskList.append(serializer.data)
        return Response(taskList)
