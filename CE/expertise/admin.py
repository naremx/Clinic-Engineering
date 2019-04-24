from django.contrib import admin
from .models import *


# Register your models here.

class ExpertiseAdmin(admin.ModelAdmin):
    list_display = ['advisor', 'expertise','id']


admin.site.register(Expertise, ExpertiseAdmin)
