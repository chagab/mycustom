# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-29 15:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0009_auto_20161229_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectionephemere',
            name='type_contour',
            field=models.CharField(choices=[('dotted', 'dotted'), ('dashed', 'dashed'), ('solid', 'solid'), ('double', 'double'), ('groove', 'groove'), ('ridge', 'ridge'), ('inset', 'inset'), ('outset', 'outset'), ('none', 'none'), ('hidden', 'hidden')], default='none', max_length=15),
        ),
        migrations.AlterField(
            model_name='mosaique',
            name='colonne',
            field=models.CharField(choices=[('colonne_1', 'colonne_1'), ('colonne_2', 'colonne_2'), ('colonne_3', 'colonne_3')], default='none', max_length=15),
        ),
    ]
