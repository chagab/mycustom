# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-08-13 10:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0036_auto_20170813_1051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='achatlogo',
            name='categorie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='achetez.AchatCategorie'),
        ),
    ]
