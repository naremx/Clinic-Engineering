from django.urls import path
from .views import Usshowdetail,Adshowdetail
urlpatterns = [
    path('Usshowdetail/', Usshowdetail.as_view(), name="Usshowdetail"),
    path('Adshowdetail/', Adshowdetail.as_view(), name="Adshowdetail"),
    ]
