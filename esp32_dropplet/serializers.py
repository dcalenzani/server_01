from rest_framework import serializers
from .models import DH11_SENSOR

class DH11Serializer(serializers.ModelSerializer):
    class Meta:
        model=DH11_SENSOR
        fields=('c_temp','f_temp','hum','check_time')