from django.urls import path
from .views import advisorcsv,getaddata


urlpatterns = [

    path('addata/', advisorcsv, name="addata"),
    path('getaddata/',getaddata.as_view(),name="getaddata")

]
