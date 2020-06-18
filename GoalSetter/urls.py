from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', admin.site.urls),
    path('', include('users.urls')),
    path('', include('projects.urls')),
    path('', include('whitelists.urls')),
    path('', include('tasks.urls')),
    path('', include('events.urls')),
    path('', include('urlsessions.urls'))
]
