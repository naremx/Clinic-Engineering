from django.urls import path
from .views import *

urlpatterns = [
    path('adddocument/', adddocument.as_view(), name="adddocument"),
    path('deletedocument/', deletedocument.as_view(), name="deletedocument"),
    path('showdocument/', showdocument.as_view(), name="showdocument"),
    path('getdocument/', getdocument.as_view(), name="getdocument"),
    path('getsubdocument/', getsubdocument.as_view(), name="getsubdocument"),
    path('showsubdocument/', showsubdocument.as_view(), name="showsubdocument"),
    path('addsubdoc/', addsubdoc.as_view(), name="addsubdoc"),
    path('file/',file.as_view(), name='file')
    ]
