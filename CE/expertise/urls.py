from django.urls import path
from .views import *


urlpatterns = [
     path('test/', expertise.as_view(), name="test"),
]