from django.db import models
from rest_framework import status
from Account.models import User


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    expo_token = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True, blank=True)

    def set_token(self, token):
        self.expo_token = token
        self.save()

    @staticmethod
    def create(user, token):
        return Notification.objects.create(
            user=user,
            expo_token=token
        )

    def send_notification(self, message, title, data):
        from exponent_server_sdk import PushClient
        from exponent_server_sdk import PushMessage
        try:
            PushClient().publish(
                PushMessage(to=self.expo_token,
                            body=message,
                            title=title,
                            sound='default',
                            data=data,
                            )
            )
            return status.HTTP_200_OK
        except:
            return status.HTTP_400_BAD_REQUEST