# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-29 14:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0004_mosaique'),
    ]

    operations = [
        migrations.AddField(
            model_name='mosaique',
            name='confirm',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
