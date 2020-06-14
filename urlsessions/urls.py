from rest_framework import routers
from .api import SessionViewSet

router = routers.DefaultRouter()
router.register('api/sessions', SessionViewSet, 'session')

urlpatterns = router.urls