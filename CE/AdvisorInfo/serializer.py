from django.contrib.auth.models import User
from rest_framework import serializers
from .models import AdvisorData, available


class AvailableSerializer(serializers.ModelSerializer):
    class Meta:
        model = available
        fields = "__all__"


class AdvisorDataSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(source='first_name')
    # surname = serializers.CharField(source='last_name')
    # email = serializers.CharField(source='username')
    # item = AvailableSerializer(many=True)

    class Meta:
        model = AdvisorData
        # fields = '__all__'
        fields = (
            'id', 'first_name', 'last_name', 'telephone', 'email', 'department', 'tax_number', 'gender',
            'address',)
        # 'item'
        # fields = (
        # 'first_name', 'telephone', 'department', 'email', 'tax_number', 'gender', 'expertise', 'address', 'last_name')


class ShowAvailableSerializer(serializers.ModelSerializer):
    free_time = serializers.SerializerMethodField('time')

    class Meta:
        model = available
        fields = ('free_date', 'free_time', 'id')

    def time(self, obj):
        from django.shortcuts import get_object_or_404
        import time
        available1 = get_object_or_404(available, id=obj.id)
        # print(available1)
        return str(available1.free_time.start_time)+'-'+ str(available1.free_time.end_time)

