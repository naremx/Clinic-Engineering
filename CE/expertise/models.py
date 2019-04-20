# from django.contrib.auth.models import AbstractUser
from django.db import models
from AdvisorInfo.models import *


# Create your models here.

class Expertise(models.Model):
    advisor = models.ForeignKey(AdvisorData, on_delete=models.CASCADE,default='')
    expertise = models.CharField(max_length=500, default='', blank=True)