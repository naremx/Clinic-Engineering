from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Notification

class UploadExpoTokenAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data)
        notification = Notification.objects.filter(expo_token=str(request.data['expo_token']))
        if notification:
            return Response(status=status.HTTP_200_OK)
        else:
            Notification.create(
                user=request.user,
                token=str(request.data['expo_token'])
            )
        return Response(status=status.HTTP_200_OK)