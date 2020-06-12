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


class Tasks(models.Model):
    name =models.TextField(max_length=30)
    category = models.TextField(max_length = 15)
    notes = models.TextField(max_length=255)
    start_date = models.DateField(auto_now=True)    
    estimate_time = models.DurationField
    actual_time = models.DurationField
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    
    # name VARCHAR(25) UNIQUE NOT NULL,
    # category TEXT,
    # notes TEXT,
    # start_date TIMESTAMP,
    # estimate_time INTERVAL,
    # actual_time INTERVAL,
    # project_id INT REFERENCES projects(id) 