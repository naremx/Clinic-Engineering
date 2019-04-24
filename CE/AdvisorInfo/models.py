# from django.contrib.auth.models import AbstractUser
from django.db import models
from Account.models import User
import datetime


# Create your models here.

class AdvisorData(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,default='')
    first_name = models.CharField(max_length=500, default='', blank=True)
    last_name = models.CharField(max_length=500, default='', blank=True)
    telephone = models.CharField(max_length=500, default='', blank=True)
    department = models.CharField(max_length=500, default='', blank=True)
    email = models.CharField(max_length=500, default='', blank=True)
    tax_number = models.CharField(max_length=500, default='', blank=True)
    gender = models.CharField(max_length=500, default='', blank=True)
    address = models.CharField(max_length=500, default='', blank=True)
    name = models.CharField(max_length=500,default='',blank=True)
    # available = models.BooleanField(default=True)
    def __str__(self):
        return self.first_name + self.last_name


class time(models.Model):
    # nineam = models.CharField(max_length=500, default='', blank=True)
    # tenam = models.CharField(max_length=500, default='', blank=True)
    # elevenam = models.CharField(max_length=500, default='', blank=True)
    # onepm = models.CharField(max_length=500, default='', blank=True)
    # twopm = models.CharField(max_length=500, default='', blank=True)
    # threepm = models.CharField(max_length=500, default='', blank=True)
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    is_display = models.BooleanField(default=True)

    def __str__(self):
        return str(self.start_time) + '-' + str(self.end_time)


class available(models.Model):
    free_date = models.DateField(blank=True, null=True)
    advisor = models.ForeignKey(AdvisorData, on_delete=models.CASCADE, default='')
    free_time = models.ForeignKey(time, on_delete=models.CASCADE, default='')
    is_display = models.BooleanField(default=True)
    def __str__(self):
        return str(self.free_date) + ' ' + str(self.free_time) + ' ' + str(self.advisor)
