from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *

class ExpoAdmin(admin.ModelAdmin):
    list_display = ('id',)



admin.site.register(Notification, ExpoAdmin)
