from django.urls import path

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('',views.contact.as_view(),name="login"),
    path('register',views.register.as_view(),name="register")
]