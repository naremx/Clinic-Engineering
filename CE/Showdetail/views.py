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
        if (request.data['user_type']==3):
            expertise = Expertise.objects.filter(advisor__id=request.data['id'])
            expserializers = ExpertiseSerializer(expertise, many=True)
            return Response(expserializers.data)

        elif (request.data['user_type']==2):
            print(request.user.id)
            detail = AdvisorData.objects.filter(user__id=request.user.id)
            avsserializers = AdvisorDataSerializer(detail, many=True)
            expertise = Expertise.objects.filter(advisor__user=request.user)
            # expertise2 = Expertise.objects.filter(advisor__first_name='พิพัฒน์ พรหมมี')
            # advisor = AdvisorData.objects.filter(first_name='พิพัฒน์ พรหมมี').values('user__username')
            # print(advisor)
            print(expertise)
            expserializers = ExpertiseSerializer(expertise, many=True)
            return Response({'avs': avsserializers.data, 'exp': expserializers.data})
