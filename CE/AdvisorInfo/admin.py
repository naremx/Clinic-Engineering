from django.contrib import admin
from .models import *
# Register your models here.
class AdvisorDataAdmin(admin.ModelAdmin):
    list_display = ('gender','first_name','email','telephone','department')


admin.site.register(AdvisorData,AdvisorDataAdmin)
