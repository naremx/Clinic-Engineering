from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class DocumentSerializer(serializers.ModelSerializer):
    advisor = serializers.CharField(source='name.first_name')
    queue = serializers.CharField(source='queue.id')
    user = serializers.CharField(source='user.id')
    class Meta:
        model = Document
        fields = ('topic','description','start_time','end_time','user','advisor','queue')



