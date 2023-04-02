from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from . import views

app_name = 'esp32_dropplet'

router = routers.DefaultRouter()
router.register(r'Measures',views.DH11View,'esp32_dropplet')
urlpatterns = [
    path('admin', admin.site.urls),
    path('api/', include(router.urls))
]
