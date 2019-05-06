from .models import AdvisorData, available, time
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from django.shortcuts import get_object_or_404

from Account.serializer import AdvisorSerializer
import datetime

import pandas as pd

def advisorcsv(request):
    contact = pd.read_csv("contact.csv")
    first_name = contact['first_name']
    last_name = contact['last_name']
    name = contact['name']
    email = contact['email']
    telephone = contact['telephone']
    department = contact['department']
    gender = contact['prefix']

    count = 0
    for x in range(0, 508):
        # u = User(
        #     first_name=name[x],
        #     username=name[x],
        #     password=1234
        # )
        # u.save()
        # for i in contact:
        list = {
            'username': str(x) + str(email[x]),
            # 'username': 'mm',
            'password': '1234',
            'user_type': '2'
        }
        # print(list)
        serializer = AdvisorSerializer(data=list)
        # print(serializers)
        if serializer.is_valid(raise_exception=ValueError):
            user_obj = serializer.create(validated_data=list)
        p = AdvisorData(
            user=user_obj,
            first_name=first_name[x],
            last_name=last_name[x],
            name=name[x],
            email=email[x],
            telephone=telephone[x],
            department=department[x],
            gender=gender[x]
        )
        p.save()


# def advisor(request):
#     p = AdvisorData(
#         first_name='thanes',
#         last_name='wanadonpisal',
#         email='58010555@kmitl.ac.th',
#         department='computer engineering',
#         expertise='django',
#         address='ecc504',
#         telephone='0832759409',
#         tax_num='111222333',
#         gender='male'
#     )
#     p.save()

# find solution to pull addata from excel


class getaddata(APIView):
    permission_classes = ()

    def get(self, request):
        # Advisor_list = AdvisorData.objects.all()
        Advisor_list = AdvisorData.objects.filter(id=1689)
        serializers = AdvisorDataSerializer(Advisor_list, many=True)


        return Response(serializers.data)


class Adshowavailable(APIView):
    permission_classes = ()
    def post(self, request):
        print(request.user)
        advisor_available = available.objects.filter(advisor__user=request.user, is_display=True)
        # serializers = ShowAvailableSerializer(advisor_available, many=True)
        serializers = ShowAvailableSerializer(advisor_available, many=True)
        print(serializers)
        return Response(serializers.data)

class Usshowavailable(APIView):
    def post(self, request):
        print(request.data)
        advisor_available = available.objects.filter(advisor__id=request.data, is_display=True)
        # serializers = ShowAvailableSerializer(advisor_available, many=True)
        serializers = ShowAvailableSerializer(advisor_available, many=True)
        print(serializers)
        return Response(serializers.data)


class createavailable(APIView):
    permission_classes = ()

    def post(self, request):
        # print(1)
        print(request.data)
        print(request.user)
        # print(request.data['free_date'][0])
        # print(request.data['time']['selected'])
        # print(type(request.data['time']['selected'][0]))
        for x in request.data['free_date']:
            for i in request.data['time']['selected']:

                if available.objects.filter(free_date=x, advisor__user=request.user,
                                            free_time=i, ):
                    print(x, i)
                else:
                    print(3)
                    p = available(
                        free_date=datetime.datetime.strptime(x, "%Y-%m-%d").date(),
                        advisor=get_object_or_404(AdvisorData, user=request.user),
                        free_time=get_object_or_404(time, id=i)
                    )
                    p.save()
        return Response(status=201)


class editavailable(APIView):
    def post(self, request):
        # for x in request.data['free_date']:
        #     for i in request.data['time']['selected']:
        #
        #         if available.objects.filter(free_date=x, advisor__user=request.user,
        #                                     free_time=i, ):
        #             available.object.filter(free_date=x, advisor__user=request.user,free_time=i).delete()
        #         else:
        #             p = available(
        #                 free_date=datetime.datetime.strptime(x, "%Y-%m-%d").date(),
        #                 advisor=get_object_or_404(AdvisorData, user=request.user),
        #                 free_time=get_object_or_404(time, id=i)
        #             )
        #             p.save()
        return Response(status=201)


class deleteavailable(APIView):
    def post(self, request):
        # for x in request.data['time']:
        for i in request.data['time']['selected']:
            available.objects.filter(id=i, advisor__user=request.user, ).delete()

        return Response(status=201)
