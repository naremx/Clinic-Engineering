from django.urls import path
from .views import Queue
urlpatterns = [
    path('Queue', Queue.as_view(), name="queue"),
    ]
