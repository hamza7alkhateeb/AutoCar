from django.db import models
from datetime import datetime


class Contact(models.Model):
    name= models.CharField(max_length=200)
    email= models.CharField(max_length=100)
    subject= models.CharField(max_length=100)
    message= models.TextField(max_length=2500,blank=True)
    contact_date= models.DateTimeField(default=datetime.now,blank=True)
    
    def __str__(self):
        return self.email


