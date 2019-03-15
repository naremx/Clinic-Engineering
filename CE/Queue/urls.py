from django.urls import path
urlpatterns = [
    path('Queue',views.queue.as_view(),name="queue"),
    ]
