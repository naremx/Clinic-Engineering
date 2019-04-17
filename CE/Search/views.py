from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from AdvisorInfo.models import AdvisorData
from AdvisorInfo.serializer import*


class search(APIView):
    def get(self, request):
        if AdvisorData.objects.filter(first_name__icontains=request.data['advisor']):
            Advisor_list = AdvisorData.objects.filter(name__id=request.data['advisor'])
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)
        elif AdvisorData.object.filter(department__icontains=request.data['department']):
            Advisor_list = AdvisorData.objects.filter(department=request.data['department'])
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)
        print(1)