# Generated by Django 2.1 on 2019-03-26 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Queue', '0005_remove_queue_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='queue',
            name='status',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
    ]