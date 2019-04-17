from django.urls import path
from .views import Usshowhistory,Adshowhistory
urlpatterns = [
    path('Usshowhistory/', Usshowhistory.as_view(), name="Usshowhistory"),
    path('Adshowhistory/', Adshowhistory.as_view(), name="Adshowhistory"),
    ]
