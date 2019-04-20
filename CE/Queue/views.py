from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from AdvisorInfo.models import time, available, AdvisorData
from .models import Queue
from .serializer import *
from datetime import datetime
import dateutil.parser

datetime.now()


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
        print(request.data['time']['selected'])

        for id in request.data['time']['selected']:
            if Queue.objects.filter(available__id=id, name__id=request.data['advisor']):
                return Response(status=status.HTTP_400_BAD_REQUEST)
            print(request.data)
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

        return Response(status=status.HTTP_201_CREATED)


class confirm(APIView):
    def post(self, request):
        print(request.data['id'])
        print(request.data['decision'])
        decision = int(request.data['decision'])
        print(decision)
        if decision != 1:
            print("if")
            Queue.objects.filter(id=request.data['id']).update(status='rejected')
            available.objects.filter(advisor__user=request.user).update(is_display=True)

        else:
            queue = get_object_or_404(Queue, id=request.data['id'])
            queue.status = 'accepted'
            available.objects.filter(id=queue.available.id).update(is_display=False)
            queue.save()
            print("else")

        return Response(status=200)


class deletequeue(APIView):
    def post(self, request):
        print(request.data)
        Queue.objects.filter(id=request.data['id'], user=request.user, ).delete()
        return Response(status=201)
