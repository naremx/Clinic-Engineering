# Generated by Django 2.1 on 2019-04-08 16:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('AdvisorInfo', '0009_auto_20190326_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='advisordata',
            name='user',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
