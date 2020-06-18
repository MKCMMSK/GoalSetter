from rest_framework import routers
from .api import URLSessionViewSet

router = routers.DefaultRouter()
router.register('api/urlsessions', URLSessionViewSet, 'session')

urlpatterns = router.urls