import datetime

from django.db import models
from django.contrib.auth.models import User

class UserData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    introduction = models.TextField()
    profile_image = models.TextField()
    create_at = models.DateField()

    def save_user_data(self, username, password, email):
        user = User(username=username, password=password, email=email)
        user.save()
        self.user = user
        self.create_at = datetime.datetime.now()
        try :
            self.save()
            return True
        except:
            return False

