from django.urls import path
from .views import advisor

urlpatterns = [

    path('addata/', advisor, name="addata"),
]
