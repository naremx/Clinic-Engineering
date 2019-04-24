from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class DocumentSerializer(serializers.ModelSerializer):

    queue = serializers.CharField(source='queue.id')
    user = serializers.CharField(source='user.id')
    class Meta:
        model = Document
        fields = ('topic','description','start_date','end_date','user','queue','name','id')


class SubDocumentSerializer(serializers.ModelSerializer):

    doc = serializers.CharField(source='doc.id')
    user = serializers.CharField(source='user.id')
    class Meta:
        model = SubDoc
        fields = ('topic','description','user','name','doc','id','status')

class FileSerializer(serializers.ModelSerializer):
    subdoc=serializers.CharField(source='subdoc.id')
    user = serializers.CharField(source='user.id')
    class Meta:
        model = Document
        fields = ('file','user','subdoc')

