from rest_framework.response import Response
from rest_framework.views import APIView
from AdvisorInfo.serializer import *
from Account.serializer import *
from expertise.models import Expertise
from .serializer import *
from django.shortcuts import render


# Create your views here.
class Usshowdetail(APIView):
    def post(self, request):
        detail = User.objects.filter(id=request.user.id)
        serializers = UserSerializer(detail, many=True)
        print(serializers.data)
        return Response(serializers.data)


class Adshowdetail(APIView):
    permission_classes = ()
    def post(self, request):
        # if request.data['user_type']==2:
        print(request.data)
        detail = AdvisorData.objects.filter(id=request.data)
        avsserializers = AdvisorDataSerializer(detail, many=True)
        expertise = Expertise.objects.filter(advisor__id=request.data)
        expserializers = ExpertiseSerializer(expertise, many=True)
        print(expertise)
        return Response({'avs': avsserializers.data, 'exp': expserializers.data})
    #
    # elif request.data['user_type']==3:
    #     detail = AdvisorData.objects.filter(user__id=request.user.id)
    #     avsserializers = AdvisorDataSerializer(detail, many=True)
    #     expertise = Expertise.objects.filter(advisor__id=request.user.id)
    #     expserializers = ExpertiseSerializer(expertise, many=True)
    #
    #     return Response({'avs': avsserializers.data, 'exp': expserializers.data})
