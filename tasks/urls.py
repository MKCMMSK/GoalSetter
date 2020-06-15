from rest_framework import routers
from .api import TaskViewSet

router = routers.DefaultRouter()
router.register('api/tasks', TaskViewSet, 'Tasks')
urlpatterns = router.urls