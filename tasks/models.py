from django.db import models
from projects.models import Project
# Create your models here.
class Task(models.Model):
    name =models.TextField(max_length=30)
    category = models.TextField(max_length = 15)
    notes = models.TextField(max_length=255)
    start_date = models.DateField(auto_now=True)    
    estimate_time = models.DurationField
    actual_time = models.DurationField
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
