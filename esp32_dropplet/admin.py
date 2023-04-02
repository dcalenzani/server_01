from django.contrib import admin
from .models import DH11_SENSOR
from .models import RESET_BUTTON

# create a class for the admin-model integration
class DH11_SENSORAdmin(admin.ModelAdmin):
    list_display = ("c_temp", "f_temp", "hum","check_time")

class RESETAdmin(admin.ModelAdmin):
    list_display = ("time_clicked", "reason_clicked", "was_pressed_recently")
# Register your models here.
admin.site.register(RESET_BUTTON, RESETAdmin)
admin.site.register(DH11_SENSOR, DH11_SENSORAdmin)