from .models import AdvisorData
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import AdvisorDataSerializer
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
        print(serializers.data)
        return Response(serializers.data)
