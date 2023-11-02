from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'image', 'image_url']
        read_only_fields  = ['email']
        
    def get_image_url(self, obj):
        if obj.image:
            return f'{obj.image.url}'
        else:
            return None