from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from AdvisorInfo.models import time, available, AdvisorData
from .models import Queue,QueueAd
from .serializer import *
from datetime import datetime
import dateutil.parser

datetime.now()

class addqueue(APIView):
    permission_classes = ()
    def post(self, request):
        print(request.data['time']['selected'])
        print(666666666666666666666666666666666666)
        for id in request.data['time']['selected']:
            if Queue.objects.filter(available__id=id, name__id=request.data['advisor']):
                return Response(status=status.HTTP_400_BAD_REQUEST)
            Us = Queue(
                name=get_object_or_404(AdvisorData, id=request.data['advisor']),
                topic=request.data['topic'],
                date_time=dateutil.parser.parse(request.data['free_date']),
                detail=request.data['detail'],
                type=request.data['type'],
                user=request.user,
                available=get_object_or_404(available, id=int(id))

            )
            Us.save()
            e = available.objects.filter(id=id).update(is_display=False)

            QueueAdmin = QueueAd(
                name=get_object_or_404(AdvisorData, id=request.data['advisor']),
                topic=request.data['topic'],
                date_time=dateutil.parser.parse(request.data['free_date']),
                detail=request.data['detail'],
                type=request.data['type'],
                user=request.user,
                available=get_object_or_404(available, id=int(id))

            )
            QueueAdmin.save()
            e = available.objects.filter(id=id).update(is_display=False)

        return Response(status=status.HTTP_201_CREATED)


class confirm(APIView):
    def post(self, request):
        permission_classes = ()
        decision = int(request.data['decision'])
        print("show")
        if decision != 1:
            queue = get_object_or_404(Queue, id=request.data['id'])
            Queue.objects.filter(id=request.data['id']).update(status='rejected')
            available.objects.filter(id=queue.available.id).update(is_display=True)

            Queue.objects.filter(id=request.data['id']).delete()

        else:
            print(request.data)
            queue = get_object_or_404(Queue, id=request.data['id'])
            queue.status = 'accepted'
            available.objects.filter(id=queue.available.id).update(is_display=False)
            queue.save()

        return Response(status=200)


class deletequeue(APIView):
    def post(self, request):
        print(request.data)
        print(request.data['name'])
        queue = get_object_or_404(Queue, id=request.data['id'])
        print(queue)
        Queue.objects.filter(id=request.data['id'], name__first_name=request.data['name']).delete()
        print(queue.available.id)
        available.objects.filter(id=queue.available.id).update(is_display=True)
        return Response(status=201)
