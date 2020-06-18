from django.db import models
from tasks.models import Task
# Create your models here.

class URLSession(models.Model):
    
    duration = models.DurationField
    time_of_day = models.DateField(auto_now=True)
    task = models.ForeignKey(Task, on_delete=models.CASCADE) 
    