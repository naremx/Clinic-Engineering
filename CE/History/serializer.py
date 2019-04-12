from rest_framework import serializers
from Queue.models import *

class ShowHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Queue
        fields = ('topic','date_time','status','type')