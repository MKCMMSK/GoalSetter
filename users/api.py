from users.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from rest_framework import request
from rest_framework.decorators import action
from rest_framework.response import Response
from google.oauth2 import id_token
# from google.auth.transport import request

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
    @action(detail=True, methods=['post'])
    def authentication(self, request, pk=None):
        # tokenId = self.request.body.decode('ascii')
        # idinfo = id_token.verify_oauth2_token(tokenId, requests.Request()) #CLIENT_ID needed
        # userId = idinfo['sub']

        # # currentUser = User.objects.get(google_sub = userId)

        # if not currentUser:
        #     firstName = idinfo('given_name')
        #     lastName = idinfo('family_name')
        #     email = idinfo('email')
        #     # newUser = User(first_name=firstName, last_name=lastName, email=email, sub=userId)
        #     newUser.save()
        # else:
        #     Response("Authenticated")

        return Response("Authenticated")