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
    permission_classes = []

    # if permission_classes =from datetime import datetime= IsAdmin:
    #     print(1)
    # elif permission_classes == IsAdvisor:
    #     print(2)
    # else:
    #     print(3)

    def post(self, request):
        print(request.user)
        p = Queue(
            name=get_object_or_404(AdvisorData, id=request.data['advisor']),
            topic=request.data['topic'],
            date_time=dateutil.parser.parse(request.data['date']),
            detail=request.data['descriptions'],
            type=request.data['check'],
            user=get_object_or_404(User, id=request.user.id)
        )
        p.save()
        return Response(status=status.HTTP_201_CREATED)
