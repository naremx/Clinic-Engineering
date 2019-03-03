from django.contrib.auth.models import User
from rest_framework import serializers
from .models import AdvisorData


class AdvisorDataSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(source='first_name')
    # surname = serializers.CharField(source='last_name')
    # email = serializers.CharField(source='username')
    class Meta:
        model = AdvisorData
        fields = ('first_name', 'last_name','telephone','email','department','tax_number', 'gender', 'expertise','address')

