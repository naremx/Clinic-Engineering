from django.urls import path

from .views import UploadExpoTokenAPIView
urlpatterns = [
    path('upload_expo_token/', UploadExpoTokenAPIView.as_view())
]