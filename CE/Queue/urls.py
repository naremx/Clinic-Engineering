from django.urls import path
from .views import addqueue,confirm
urlpatterns = [
    path('queue/', addqueue.as_view(), name="queue"),
    path('confirm/',confirm.as_view(), name='confirm')
    ]
