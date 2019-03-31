from django.db import models
from Account.models import User
from AdvisorInfo.models import AdvisorData
from datetime import datetime
# Create your models here.
class Queue(models.Model):
    name = models.ForeignKey(AdvisorData,on_delete=models.CASCADE,default='')
    topic = models.CharField(max_length=500, default='', blank=True)
    date_time = models.DateTimeField(default=datetime.now, blank=True)
    detail = models.CharField(max_length=500, default='', blank=True)
    type = models.BooleanField(default=False)
    user = models.ForeignKey(User,on_delete=models.CASCADE,default='')
    status = models.CharField(max_length=500, default='', blank=True)
