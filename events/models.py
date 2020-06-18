from django.db import models
from tasks.models import Task
from urlsessions.models import URLSession
# Create your models here.

class Event(models.Model):
    urls = models.CharField(max_length=30)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=['urls', 'task_id'], name='unique_sites_per_task')
    url_session = models.ForeignKey(URLSession(id), on_delete=models.CASCADE)