from django.contrib import admin
from .models import *


# Register your models here.
class DocumentAdmin(admin.ModelAdmin):
    list_display = ['id', 'topic', 'name']
class SubDocAdmin(admin.ModelAdmin):
    list_display = ['id', 'topic', 'name']
class SuperFileAdmin(admin.ModelAdmin):
    list_display = ['id', 'file']


admin.site.register(SuperFile, SuperFileAdmin)
admin.site.register(SubDoc, SubDocAdmin)
admin.site.register(Document, DocumentAdmin)
