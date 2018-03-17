# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-09-17 10:29
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0044_auto_20170917_1022'),
    ]

    operations = [
        migrations.AddField(
            model_name='achatlogo',
            name='tag',
            field=models.TextField(default=1, help_text="Entrer les tag s\xe9par\xe9s par des '#'."),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='achatlogo',
            name='categorie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='achetez.AchatCategorie'),
        ),
    ]