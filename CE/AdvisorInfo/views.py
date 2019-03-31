from .models import AdvisorData, available, time
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from django.shortcuts import get_object_or_404
import pandas as pd


def advisorcsv(request):
    contact = pd.read_csv("contact.csv")

    name = contact['name']
    email = contact['email']
    telephone = contact['telephone']
    department = contact['department']
    gender = contact['prefix']

    count = 0
    for x in range(0, 508):
        p = AdvisorData(
            first_name=name[x],
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
        # create if for front request
        Advisor_list = AdvisorData.objects.all()
        serializers = AdvisorDataSerializer(Advisor_list, many=True)
        return Response(serializers.data)


class showavailable(APIView):
    def post(self, request):
        print(request.data)
        advisor_available = available.objects.filter(advisor__id=request.data)
        serializers = ShowAvailableSerializer(advisor_available,many=True)
        print(serializers)
        return Response(serializers.data)

class editavailable(APIView):
    def post(self, request):
        print(request.data)
        import datetime
        if available.objects.filter(free_date=request.data['date'], advisor__id=request.data['id'],
                                    free_time=request.data['time']):
            print('boom')
        else:
            p = available(
                free_date=datetime.datetime.strptime(request.data['date'], "%Y-%m-%d").date(),
                advisor=get_object_or_404(AdvisorData, id=request.data['id']),
                free_time=get_object_or_404(time, )
            )
            p.save()
