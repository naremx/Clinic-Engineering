from django.urls import path
from .views import addqueue,confirm,deletequeue
urlpatterns = [
    path('addqueue/', addqueue.as_view(), name="addqueue"),
    path('confirm/',confirm.as_view(), name='confirm'),
    path('deletequeue/',deletequeue.as_view(), name='deletequeue'),
    ]
