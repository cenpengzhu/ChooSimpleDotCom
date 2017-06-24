"""
Definition of models.
"""

from django.db import models

# Create your models here.
class timelineThing(models.Model) :
    title = models.CharField(max_length = 50);
    description = models.CharField(max_length = 300);
    datetime = models.DateField();
    content = models.URLField(max_length = 500);
    status = models.IntegerField();