from rest_framework import serializers
from expertise.models import Expertise


class ExpertiseSerializer(serializers.ModelSerializer):
    advisor = serializers.CharField(source='advisor.id')
    class Meta:
        model = Expertise
        fields = ('expertise','advisor')
