from django.urls import path
from .views import Usshowhistory,Adshowhistory,AdminShowQueue,AdminEditQueue
urlpatterns = [
    path('Usshowhistory/', Usshowhistory.as_view(), name="Usshowhistory"),
    path('Adshowhistory/', Adshowhistory.as_view(), name="Adshowhistory"),
    path('AdminShowQueue/', AdminShowQueue.as_view(), name="AdminShowQueue"),
    path('AdminEditQueue/', AdminEditQueue.as_view(), name="AdminEditQueue"),
    ]
