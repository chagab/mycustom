# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-19 14:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendre', '0004_methodedescription_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ongletvendre',
            name='image_titre',
            field=models.ImageField(upload_to='image_titre'),
        ),
    ]
