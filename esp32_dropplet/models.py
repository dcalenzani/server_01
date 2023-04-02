import datetime

from django.db import models
from django.utils import timezone

# Create your models here.
class DH11_SENSOR(models.Model):
    c_temp = models.FloatField(default=0)
    f_temp = models.FloatField(default=0)
    hum = models.FloatField(default=0)
    check_time = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return str(self.c_temp)

class RESET_BUTTON(models.Model):
    time_clicked = models.DateTimeField(default=timezone.now)
    reason_clicked = models.TextField(default="System freeze")
    def was_pressed_recently(self):
        return self.time_clicked >= timezone.now() - datetime.timedelta(days=2)
    def __str__(self):
        return str(self.time_clicked)
    