# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-11-07 20:07
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vendre', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='methodedescription',
            name='date',
        ),
    ]
