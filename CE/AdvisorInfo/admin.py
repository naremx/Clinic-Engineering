from django.contrib import admin
from .models import *


# Register your models here.
class AdvisorDataAdmin(admin.ModelAdmin):
    list_display = ('id', 'gender', 'first_name','last_name', 'email', 'telephone', 'department')


class TimeAdmin(admin.ModelAdmin):
    list_display = ('id', 'start_time', 'end_time', 'is_display')


class AvailableAdmin(admin.ModelAdmin):
    list_display = ('id', 'free_date', 'advisor', 'free_time', 'is_display')



admin.site.register(AdvisorData, AdvisorDataAdmin)
admin.site.register(available, AvailableAdmin)
admin.site.register(time, TimeAdmin)
