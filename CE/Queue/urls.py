from django.urls import path
from .views import addqueue
urlpatterns = [
    path('Queue', addqueue.as_view(), name="queue"),
    ]
