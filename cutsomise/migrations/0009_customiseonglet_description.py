# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-04-20 06:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cutsomise', '0008_auto_20161227_1211'),
    ]

    operations = [
        migrations.AddField(
            model_name='customiseonglet',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
