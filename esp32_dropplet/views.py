from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets

from .models import DH11_SENSOR
from .models import RESET_BUTTON

from .serializers import DH11Serializer

# Create your views here.

class DH11View(viewsets.ModelViewSet):
    serializer_class = DH11Serializer
    queryset = DH11_SENSOR.objects.all()
