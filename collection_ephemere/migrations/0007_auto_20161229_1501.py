# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-29 15:01
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0006_colonemosaique'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='colonemosaique',
            name='colonne_1',
        ),
        migrations.RemoveField(
            model_name='colonemosaique',
            name='colonne_2',
        ),
        migrations.RemoveField(
            model_name='colonemosaique',
            name='colonne_3',
        ),
        migrations.DeleteModel(
            name='coloneMosaique',
        ),
    ]