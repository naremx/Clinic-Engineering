from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.compat import coreapi, coreschema
from rest_framework.response import Response
from rest_framework.schemas import ManualSchema
from rest_framework.views import APIView
from django.core.mail import send_mail
import smtplib
from django.conf import settings
from rest_framework import status

class login(APIView):
    def post(self, request):
        print(request.data)
        