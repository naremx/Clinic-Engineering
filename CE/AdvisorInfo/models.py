# from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class AdvisorData(models.Model):
    first_name = models.CharField(max_length=500, default='', blank=True)
    last_name = models.CharField(max_length=500, default='', blank=True)
    telephone = models.CharField(max_length=500, default='', blank=True)
    department = models.CharField(max_length=500, default='', blank=True)
    email = models.CharField(max_length=500, default='', blank=True)
    tax_number = models.CharField(max_length=500, default='', blank=True)
    gender = models.CharField(max_length=500, default='', blank=True)
    expertise = models.CharField(max_length=500, default='', blank=True)
    address = models.CharField(max_length=500, default='', blank=True)

class time(models.Model):
    nine = models.CharField(max_length=500, default='', blank=True)
    ten = models.CharField(max_length=500, default='', blank=True)
    eleven = models.CharField(max_length=500, default='', blank=True)

class available(models.Model):
    datetime = models.ForeignKey(time,on_delete=models.CASCADE,default='')
    advisor = models.ForeignKey(AdvisorData,on_delete=models.CASCADE,default='')
    is_display = models.BooleanField()

