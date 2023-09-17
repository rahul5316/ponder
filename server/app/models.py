from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Challenge(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    user = models.ForeignKey(User, related_name="challenges", on_delete=models.CASCADE)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class Journal(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    feeling = models.IntegerField()
    user = models.ForeignKey(User, related_name="journals", on_delete=models.CASCADE)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
