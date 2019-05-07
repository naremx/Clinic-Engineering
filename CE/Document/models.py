from django.db import models
from Account.models import *
from AdvisorInfo.models import *
from Queue.models import *

import datetime


class Document(models.Model):
    topic = models.CharField(max_length=500, default='', blank=True)
    description = models.CharField(max_length=500, default='', blank=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='')
    name = models.CharField(max_length=500, default='', blank=True)
    queue = models.ForeignKey(Queue, on_delete=models.CASCADE, default='')


class SubDoc(models.Model):
    doc = models.ForeignKey(Document, on_delete=models.CASCADE, default='')
    status = models.CharField(max_length=500, default='incomplete', blank=True)
    topic = models.CharField(max_length=500, default='', blank=True)
    description = models.CharField(max_length=500, default='', blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='')
    name = models.CharField(max_length=500, default='', blank=True)


class File(models.Model):
    subdoc = models.ForeignKey(SubDoc, on_delete=models.CASCADE, default='')
    file = models.FileField(upload_to='pdf')
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='')
    objects = models.Manager()


class SuperFile(models.Model):
    subdoc = models.ForeignKey(SubDoc, on_delete=models.CASCADE, default='')
    # file = models.ImageFieldField(upload_to=, blank=True)
    file = models.ImageField(upload_to='file/%Y_%m_%d', blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default='')






