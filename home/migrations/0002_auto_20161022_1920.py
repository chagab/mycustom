# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-10-22 19:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='page_accueil',
            name='hauteur_logo',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='page_accueil',
            name='largeur_logo',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='page_accueil',
            name='taille_text',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
    ]
