# Generated by Django 2.1 on 2019-04-24 12:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Document', '0010_auto_20190424_1847'),
    ]

    operations = [
        migrations.CreateModel(
            name='SuperFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='pdf')),
                ('subdoc', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='Document.SubDoc')),
                ('user', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]