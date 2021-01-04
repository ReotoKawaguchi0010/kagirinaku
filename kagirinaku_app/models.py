import datetime
from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=64)
    mail_address = models.CharField(max_length=256)
    datetime = models.CharField(max_length=30)


if __name__ == '__main__':
    print(datetime.datetime.now())





