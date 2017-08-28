# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-08-28 12:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0041_auto_20170828_1246'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='achatcategorie',
            name='prix',
        ),
        migrations.AddField(
            model_name='achatlogo',
            name='prix',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='achatlogo',
            name='categorie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='achetez.AchatCategorie'),
        ),
    ]
