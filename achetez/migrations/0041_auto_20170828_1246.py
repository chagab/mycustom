# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-08-28 12:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0040_auto_20170828_1244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='achatlogo',
            name='categorie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='achetez.AchatCategorie'),
        ),
    ]
