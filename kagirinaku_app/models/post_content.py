from django.db import models
from django.contrib.auth.models import User

class PostContent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    link = models.CharField(max_length=256)
    content = models.TextField()
    create_at = models.DateField()
    delete_at = models.DateField()