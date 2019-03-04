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
from .serializer import UserSerializer
from rest_framework import status
from .models import User

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
        print(request.data)
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        print(user.user_type)
        return Response({'token': token.key, 'role': user.user_type})

class register(APIView):

        def post(self, request):
            print(request.data)
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid(raise_exception=ValueError):
                serializer.create(validated_data=request.data)

                return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)

class logout(APIView):

        def get(self, request):
            # try:
                request.user.auth_token.delete()
            # except (AttributeError):
            # # except (AttributeError, ObjectDoesNotExist):
            #     pass
            #
            # return Response({"success": ("Successfully logged out.")},
            #             status=status.HTTP_200_OK)

class fgpassword(APIView):
       def get(self,request):
            print(1)
            subject = 'Thank you for registering to our site'
            message = ' it  means a world to us '
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ['mosaicpm@outlook.com',]
            send_mail( subject, message, email_from, recipient_list )

