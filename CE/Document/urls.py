from django.urls import path
from .views import *

urlpatterns = [
    path('adddocument/', adddocument.as_view(), name="adddocument"),
    path('deletedocument/', deletedocument.as_view(), name="deletedocument"),
    ]
