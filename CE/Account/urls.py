from django.urls import path

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('',views.contact.as_view(),name="login"),
    path('Usregister/',views.Usregister.as_view(),name="Usregister"),
    path('Adregister/',views.Adregister.as_view(),name="Adregister"),
    path('fgpassword/',views.fgpassword.as_view(),name="fgpassword"),
    path('logout/',views.logout.as_view(),name="logout"),
]

