from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import pandas as pd
from Account.permissions import IsUser, IsAdmin, IsAdvisor


# Create your views here.
class Queue(APIView):
    permission_classes = [IsUser, IsAdmin, IsAdvisor]
    if permission_classes == IsAdmin:
        print(1)
    elif permission_classes == IsAdvisor:
        print(2)
    else:
        print(3)
