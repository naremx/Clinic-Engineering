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
from .serializer import *
from rest_framework import status
from .models import User
from AdvisorInfo.models import *
from AdvisorInfo.serializer import *
from django.contrib.auth import get_user_model
from notification.models import *

User = get_user_model()


class contact(APIView):
    throttle_classes = ()
    permission_classes = ()
    parser_classes = (parsers.FormParser, parsers.MultiPartParser, parsers.JSONParser,)
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer
    if coreapi is not None and coreschema is not None:
        schema = ManualSchema(
            fields=[
                coreapi.Field(
                    name="username",
                    required=True,
                    location='form',
                    schema=coreschema.String(
                        title="Username",
                        description="Valid username for authentication",
                    ),
                ),
                coreapi.Field(
                    name="password",
                    required=True,
                    location='form',
                    schema=coreschema.String(
                        title="Password",
                        description="Valid password for authentication",
                    ),
                ),
            ],
            encoding="application/json",
        )

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        serializer = UserSerializer(user)
        return Response({'token': token.key, 'role': user.user_type, 'data': serializer.data})


class Usregister(APIView):
    permission_classes = ()

    def post(self, request):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        # checkmail = User.objects.get(email=request.data['email'])
        # checkusername = User.objects.get(username=request.data['username'])
        # print(checkmail.email)
        # print(checkusername.username)
        if (request.data['first_name'] == '' or request.data['last_name'] == '' or request.data['telephone'] == '' or
                request.data['email'] == '' or request.data['password'] == '' or request.data[
                    'username'] == '' ):
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        print("kuykuykuykuy")
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)


class Adregister(APIView):
    permission_classes = ()

    def post(self, request):
        serializer = AdvisorRegisSerializer(data=request.data['user'])
        if serializer.is_valid(raise_exception=ValueError):
            user_obj = serializer.create(validated_data=request.data)
        p = AdvisorData(
            user=user_obj,
            first_name=request.data['data']['firstName'],
            last_name=request.data['data']['lastName'],
            email=request.data['data']['email'],
            telephone=request.data['data']['telephone'],
            department=request.data['data']['department'],
            tax_number=request.data['data']['tax_number'],
            gender=request.data['data']['gender']
        )
        p.save()
    #     serializer = AdvisorDataSerializer(data=request.data)
    #     if serializer.is_valid(raise_exception=ValueError):
    #         serializer.create(validated_data=request.data)
    #         return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)


class logout(APIView):

    def get(self, request):
        # try:
        request.user.auth_token.delete()

        Notification.objects.filter(user=request.user).delete()

        # except (AttributeError):
        # # except (AttributeError, ObjectDoesNotExist):
        #     pass
        #
        # return Response({"success": ("Successfully logged out.")},

        return Response(status=200)


class fgpassword(APIView):
    def post(self, request):
        print(request.data)
        list = []
        list.append(request.data)
        userpass = User.objects.get(email=request.data)

        if User.objects.filter(email=request.data):
            subject = 'God blessing on you!!, chance to change to new password'
            message = ' your password is' + userpass.password
            email_from = settings.EMAIL_HOST_USER
            recipient_list = list
            print(recipient_list)
            send_mail(subject, message, email_from, recipient_list)
