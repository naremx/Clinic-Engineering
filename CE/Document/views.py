from .models import Document
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from django.shortcuts import get_object_or_404
from rest_framework import status
from AdvisorInfo.models import AdvisorData
from Document.models import Document
import datetime


class adddocument(APIView):
    def post(self, request):
        print(request.data)
        if Document.objects.filter(user__id=id, advisor__id=request.data['advisor'], queue__id=request.data['id']):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        Dc = Document(
            topic=request.data['topic'],
            end_time=request.data['end_time'],
            start_time=request.data['start_time'],
            user=request.user,
            name=get_object_or_404(AdvisorData, id=request.data['advisor']),
        )
        Dc.save()
        return Response(status=status.HTTP_201_CREATED)


class deletedocument(APIView):
    def post(self, request):
        print(request.data)
        Document.objects.filter(id=request.data['id'], user=request.user,queue=request.data['queue'] ).delete()
        return Response(status=201)
