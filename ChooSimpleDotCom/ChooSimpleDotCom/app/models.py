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

    def to_dict(self) :
        dict = {}
        dict['title'] = getattr(self, 'title');
        dict['description'] = getattr(self, 'description');
        dict['datetime'] = str(getattr(self, 'datetime'));
        dict['content'] = getattr(self, 'content');
        dict['status'] = getattr(self, 'status');\
        return dict;
