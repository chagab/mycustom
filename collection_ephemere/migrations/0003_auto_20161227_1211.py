# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-27 12:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0002_auto_20161104_1904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectionephemere',
            name='image',
            field=models.ImageField(upload_to='collection_ephemere/image/'),
        ),
    ]
