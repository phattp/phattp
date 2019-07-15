from django.urls import path, include
from rest_framework import routers
from .views import ProfileView

router = routers.DefaultRouter()
router.register('api/profile', ProfileView, 'profile')

urlpatterns = [
    path('', include(router.urls))
]
