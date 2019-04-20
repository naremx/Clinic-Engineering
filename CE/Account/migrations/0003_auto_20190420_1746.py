# Generated by Django 2.1 on 2019-04-20 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0002_auto_20190206_1849'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.PositiveSmallIntegerField(choices=[(1, 'Admin'), (2, 'Advisor'), (3, 'User')], null=True),
        ),
    ]
