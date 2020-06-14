from rest_framework import routers
from .api import WhitelistViewSet

router = routers.DefaultRouter()
router.register('api/whitelists', WhitelistViewSet, 'whitelists')
urlpatterns = router.urls