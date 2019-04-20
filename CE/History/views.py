from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from Queue.models import Queue
from .serializer import *
from AdvisorInfo.serializer import *


# from django.shortcuts import get_object_or_404
# import pandas as pd


class Usshowhistory(APIView):
    def post(self, request):
        history = Queue.objects.filter(user=request.user)
        # print(history)
        serializers = UsShowHistorySerializer(history, many=True)
        # print(serializers)
        return Response(serializers.data)

class Adshowhistory(APIView):
    def post(self, request):
        history = Queue.objects.filter(name__user=request.user)
        serializers = AdShowHistorySerializer(history, many=True)
        return Response(serializers.data)