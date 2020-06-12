from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=100, unique=True)
    






    # first_name VARCHAR(25) NOT NULL,
    # last_name VARCHAR(25) NOT NULL,
    # email VARCHAR(50) UNIQUE NOT NULL