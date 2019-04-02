from django.urls import path
from .views import showhistory
urlpatterns = [
    path('History/', showhistory.as_view(), name="history"),
    ]
