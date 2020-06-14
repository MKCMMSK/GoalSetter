from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', admin.site.urls),
    path('crud/', include('users.urls')),
    path('crud/', include('projects.urls')),
    path('crud/', include('whitelists.urls')),
    # path('crud/', include('tasks.urls')),
    # path('crud/', include('sites.urls')),
    # path('crud/', include('urlsessions.urls'))
]
