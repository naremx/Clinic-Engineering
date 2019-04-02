from django.urls import path

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('',views.contact.as_view(),name="login"),
    path('register',views.register.as_view(),name="register"),
    path('email',views.fgpassword.as_view(),name="fgpassword"),
    path('logout',views.logout.as_view(),name="logout"),
    path('addqueue',views.addqueue.as_view(),name="addqueue"),
]