from AdvisorInfo.models import *
from rest_framework.views import APIView


class Adedit(APIView):
    def post(self, request):
        AdvisorData.objects.filter(advisor__user=request.user).update(address=request.data['address'],
                                                                      tax_number=request.data['tax_number'])
        return Response(status=200)


class Usedit(APIView):
    def post(self, request):
        AdvisorData.objects.filter(user=request.user).update(address=request.data['address'])

        return Response(status=200)