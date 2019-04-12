from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
import pandas as pd
from Account.permissions import IsUser, IsAdmin, IsAdvisor
from Account.models import User
from AdvisorInfo.models import time, available, AdvisorData
from .models import Queue
import dateutil.parser


# Create your views here.

class addqueue(APIView):
    permission_classes = ()

    # if permission_classes =from datetime import datetime= IsAdmin:
    #     print(1)
    # elif permission_classes == IsAdvisor:
    #     print(2)
    # else:
    #     print(3)

    def post(self, request):
        # print(request.data['time']['selected'])

        for id in request.data['time']['selected']:
            if Queue.objects.filter(available__id=id, name__id=request.data['advisor']):
                return Response(status=status.HTTP_400_BAD_REQUEST)
            p = Queue(
                name=get_object_or_404(AdvisorData, id=request.data['advisor']),
                topic=request.data['topic'],
                date_time=dateutil.parser.parse(request.data['free_date']),
                detail=request.data['descriptions'],
                type=request.data['type'],
                user=request.user,
                available=get_object_or_404(available, id=id)

            )
            p.save()
            e = available.objects.filter(id=id).update(is_display=False)

        return Response(status=status.HTTP_201_CREATED)


class confirm(APIView):
    def post(self, request):
        if request.data == 1:
            Queue.objects.filter(id=request.data['id']).update(status='accepted')
            available.object.filter(name=request.data['id']).update(is_display=False)

        else:
            addqueue.objects.filter(id=request.data['id']).update(status='rejected')
