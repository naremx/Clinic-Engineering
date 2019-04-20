from django.contrib import admin

from django.contrib import admin
from .models import Queue

class QueueAdmin(admin.ModelAdmin):
    list_display = ('id', )

admin.site.register(Queue,QueueAdmin)