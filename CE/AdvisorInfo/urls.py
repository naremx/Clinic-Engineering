from django.urls import path
from .views import advisor,getaddata


urlpatterns = [

    path('addata/', advisor, name="addata"),
    path('getaddata/',getaddata.as_view(),name="getaddata")
]
