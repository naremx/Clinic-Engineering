from django.contrib.auth.models import User
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(source='first_name')
    # surname = serializers.CharField(source='last_name')
    # email = serializers.CharField(source='username')

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password', 'username')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

