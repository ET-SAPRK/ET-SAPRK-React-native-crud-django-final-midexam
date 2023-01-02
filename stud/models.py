from django.db import models

class Student(models.Model):
    name=models.CharField(max_length=10, default="sami")
  

    def __str__(self):
        return self.name