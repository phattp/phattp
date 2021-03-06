from rest_framework import viewsets
from .serializers import ProfileSerializer
from .models import Profile


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
