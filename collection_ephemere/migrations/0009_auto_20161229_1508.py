# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-12-29 15:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0008_mosaique_colonne'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collectionephemere',
            name='type_contour',
            field=models.CharField(choices=[('colonne_1', 'colonne_1'), ('colonne_2', 'colonne_2'), ('colonne_3', 'colonne_3')], default='none', max_length=15),
        ),
    ]
