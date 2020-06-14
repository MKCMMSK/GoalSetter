from django.db import models
from sites.models import Site
# Create your models here.

class Session(models.Model):
    
    duration = models.DurationField
    time_of_day = models.DateField(auto_now=True)
    productivity = models.BooleanField
    sites = models.ForeignKey(Site, on_delete=models.CASCADE) 
    