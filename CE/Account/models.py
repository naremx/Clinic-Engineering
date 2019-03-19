from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    USER_TYPE_CHOICES=(
        (1,'Admin'),
        (2,'Advisor'),
        (3,'User')
    )

    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, null=True)
    # user_type = 3

