# Generated by Django 2.1 on 2019-03-08 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AdvisorInfo', '0003_auto_20190307_1606'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advisordata',
            name='address',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='department',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='email',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='expertise',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='first_name',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='gender',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='last_name',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='tax_num',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='advisordata',
            name='telephone',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
    ]
