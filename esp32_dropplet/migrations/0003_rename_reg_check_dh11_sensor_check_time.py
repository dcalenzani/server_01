# Generated by Django 4.1.5 on 2023-03-27 02:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("esp32_dropplet", "0002_dh11_sensor_reg_check"),
    ]

    operations = [
        migrations.RenameField(
            model_name="dh11_sensor", old_name="reg_check", new_name="check_time",
        ),
    ]
