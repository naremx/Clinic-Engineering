from django.db import models
from Account.models import *
from AdvisorInfo.models import *
from Queue.models import*
import datetime


class Document(models.Model):
    topic = models.CharField(max_length=500, default='', blank=True)
    description = models.CharField(max_length=500, default='', blank=True)
    start_time = models.TimeField(blank=True, null=True)
    end_time = models.TimeField(blank=True, null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default='')
    advisor = models.ForeignKey(AdvisorData, on_delete=models.CASCADE, default='')
    queue = models.ForeignKey(Queue, on_delete=models.CASCADE, default='')


