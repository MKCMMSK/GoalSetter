from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    start_date = models.DateField(auto_now=True)
    estimate_time = models.DurationField
    actual_time = models.DurationField
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

class WhiteList(models.Model):
    urls = models.CharField(max_length=30)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)


class Task(models.Model):
    name =models.TextField(max_length=30)
    category = models.TextField(max_length = 15)
    notes = models.TextField(max_length=255)
    start_date = models.DateField(auto_now=True)    
    estimate_time = models.DurationField
    actual_time = models.DurationField
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)


class Site(models.Model):
    urls = models.CharField(max_length=30)
    task_id = models.ForeignKey(Task, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=['urls', 'task_id'], name='unique_sites_per_task')

class Session(models.Model):
    
    duration = models.DurationField
    time_of_day = models.DateField(auto_now=True)
    productivity = models.BooleanField
    sites_id = models.ForeignKey(Site, on_delete=models.CASCADE) 
    