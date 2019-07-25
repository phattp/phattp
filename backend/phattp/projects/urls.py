from django.urls import path, include
from rest_framework import routers
from .views import ProjectView

router = routers.DefaultRouter()
router.register('api/projects', ProjectView, 'projects')

urlpatterns = [
    path('', include(router.urls))
]
