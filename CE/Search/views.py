from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from AdvisorInfo.models import AdvisorData
from AdvisorInfo.serializer import *
from expertise.models import *
from expertise.serializer import *


class search(APIView):
    def post(self, request):
        if AdvisorData.objects.filter(name__icontains=request.data):
            print('AdvisorName')
            Advisor_list = AdvisorData.objects.filter(first_name__icontains=request.data)
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)

        elif AdvisorData.objects.filter(department__icontains=request.data):
            print('Department')
            Advisor_list = AdvisorData.objects.filter(department__icontains=request.data)
            serializers = AdvisorDataSerializer(Advisor_list, many=True)
            return Response(serializers.data)

        elif Expertise.objects.filter(expertise__icontains=request.data):
            print('Expertise')
            print(request.data)
            Expertise_list = Expertise.objects.filter(expertise__icontains=request.data).values_list('advisor__id',
                                                                                                     flat=True).distinct()
            # expertise = get_object_or_404(Expertise,expertise__icontains=request.data)
            print(Expertise_list)
            expert = AdvisorData.objects.filter(id__in=Expertise_list)
            print(expert)
            serializers = AdvisorDataSerializer(expert,many=True)
            return Response(serializers.data)
