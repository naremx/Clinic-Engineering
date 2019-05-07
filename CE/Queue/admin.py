from django.contrib import admin

from django.contrib import admin
from .models import Queue,QueueAd

@admin.register(Queue)
class QueueAdmin(admin.ModelAdmin):
    list_display = ('id', )

@admin.register(QueueAd)
class QueueAdAdmin(admin.ModelAdmin):
    list_display = ('id', )

