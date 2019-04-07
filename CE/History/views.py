from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from Queue.models import Queue
from .serializer import *
# from django.shortcuts import get_object_or_404
# import pandas as pd


class showhistory(APIView):
    def post(self,request):
        history = Queue.objects.filter(user__id = request.user.id)
        serializers = ShowHistorySerializer(history,many=True)
        print(serializers)
        return Response(serializers.data)

