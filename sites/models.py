from django.db import models
from tasks.models import Task
# Create your models here.

class Site(models.Model):
    urls = models.CharField(max_length=30)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=['urls', 'task_id'], name='unique_sites_per_task')
