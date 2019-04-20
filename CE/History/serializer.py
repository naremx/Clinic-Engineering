from rest_framework import serializers
from Queue.models import *


class UsShowHistorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='name.first_name')
    date_time = serializers.SerializerMethodField('get_date')
    available = serializers.SerializerMethodField('get_time')
    telephone = serializers.CharField(source='name.telephone')
    class Meta:
        model = Queue
        # fields = ('topic','date_time','status','type')
        fields = ('id','name','topic', 'date_time', 'status', 'type' ,'detail','available','telephone')

    def get_time(self,obj):
        time = Queue.objects.get(id=obj.id)
        free_time = str(time.available.free_time.start_time)+'-'+str(time.available.free_time.end_time)
        return free_time

    def get_date(self,obj):
        queue = Queue.objects.get(id=obj.id)
        return queue.date_time.date()

class AdShowHistorySerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.first_name')
    date_time = serializers.SerializerMethodField('get_date')
    available = serializers.SerializerMethodField('get_time')
    telephone = serializers.CharField(source='user.telephone')

    class Meta:
        model = Queue
        # fields = ('topic','date_time','status','type')
        fields = ('id','user','topic', 'date_time', 'status', 'type' ,'detail','available','telephone')

    def get_time(self,obj):
        time = Queue.objects.get(id=obj.id)
        free_time = str(time.available.free_time.start_time)+'-'+str(time.available.free_time.end_time)
        return free_time

    def get_date(self,obj):
        queue = Queue.objects.get(id=obj.id)
        return queue.date_time.date()

