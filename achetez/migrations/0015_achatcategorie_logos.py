# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-11-07 05:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0014_achatlogo'),
    ]

    operations = [
        migrations.AddField(
            model_name='achatcategorie',
            name='logos',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='achetez.achatLogo'),
            preserve_default=False,
        ),
    ]
