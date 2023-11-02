from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import *
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.pk)
