from rest_framework import serializers
from .models import *

class ExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expertise
        fields = "__all__"
