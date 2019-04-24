# Generated by Django 2.1 on 2019-04-23 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Document', '0003_remove_document_advisor'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='name',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='document',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='document',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]