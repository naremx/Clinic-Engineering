from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from AdvisorInfo.models import AdvisorData
from AdvisorInfo.serializer import *


class search(APIView):
    def post(self, request):
        if AdvisorData.objects.filter(first_name__icontains=request.data):
            Advisor_list = AdvisorData.objects.filter(first_name__icontains=request.data)
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)

        elif AdvisorData.objects.filter(department__icontains=request.data):
            print(123123123123)
            Advisor_list = AdvisorData.objects.filter(department__icontains=request.data)
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)
