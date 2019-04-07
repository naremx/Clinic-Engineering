from django.urls import path
from .views import advisorcsv,getaddata,editavailable,showavailable


urlpatterns = [

    path('addata/', advisorcsv, name="addata"),
    path('getaddata/',getaddata.as_view(),name="getaddata"),
    path('editavailable/',editavailable.as_view(),name="editavailable"),
    path('showavailable/',showavailable.as_view())
]
