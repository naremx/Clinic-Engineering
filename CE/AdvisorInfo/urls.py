from django.urls import path
from .views import *


urlpatterns = [

    path('addata/', advisorcsv, name="addata"),
    path('getaddata/',getaddata.as_view(),name="getaddata"),
    path('createavailable/',createavailable.as_view(),name="createavailable"),
    path('editavailable/', editavailable.as_view(), name="editavailable"),
    path('deleteavailable/', deleteavailable.as_view(), name="deleteavailable"),
    path('Usshowavailable/',Usshowavailable.as_view()),
    path('Adshowavailable/',Adshowavailable.as_view())
]
