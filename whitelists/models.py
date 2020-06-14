from django.db import models
from projects.models import Project
# Create your models here.

class WhiteList(models.Model):
    urls = models.CharField(max_length=30)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
