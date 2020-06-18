from django.db import models
from users.models import User
# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    start_date = models.DateField(auto_now=True)
    estimate_time = models.DurationField
    actual_time = models.DurationField
    user = models.ForeignKey(User, on_delete=models.CASCADE)
