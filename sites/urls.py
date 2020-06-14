from rest_framework import routers
from .api import SiteViewSet

router = routers.DefaultRouter()
router.register('api/sites', SiteViewSet, 'sites')
urlpatterns = router.urls