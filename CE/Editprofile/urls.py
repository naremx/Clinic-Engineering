from django.urls import path
from .views import *


urlpatterns = [
     path('Adedit/', Adedit.as_view(), name="Adedit"),
     path('Usedit/', Usedit.as_view(), name="Usedit"),
]