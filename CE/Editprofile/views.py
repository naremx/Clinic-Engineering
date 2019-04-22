from AdvisorInfo.models import *
from Account.models import User
from rest_framework.views import APIView
from rest_framework.response import Response



class Adedit(APIView):
    def post(self, request):
        if (request.user):
            print(request.data)
            AdvisorData.objects.filter(user__id=request.user.id).update(address=request.data['address'])
            AdvisorData.objects.filter(user__id=request.user.id).update(first_name=request.data['first_name'])
            AdvisorData.objects.filter(user__id=request.user.id).update(last_name=request.data['last_name'])
            AdvisorData.objects.filter(user__id=request.user.id).update(department=request.data['department'])
            AdvisorData.objects.filter(user__id=request.user.id).update(tax_number=request.data['tax_number'])
            AdvisorData.objects.filter(user__id=request.user.id).update(telephone=request.data['telephone'])
            AdvisorData.objects.filter(user__id=request.user.id).update(email=request.data['email'])

        return Response(status=200)


class Usedit(APIView):
    def post(self, request):
        if (request.user):
            print(request.data)
            User.objects.filter(id=request.user.id).update(address=request.data['address'])
            User.objects.filter(id=request.user.id).update(first_name=request.data['first_name'])
            User.objects.filter(id=request.user.id).update(last_name=request.data['last_name'])
            User.objects.filter(id=request.user.id).update(email=request.data['email'])
            User.objects.filter(id=request.user.id).update(telephone=request.data['telephone'])

            return Response(status=200)