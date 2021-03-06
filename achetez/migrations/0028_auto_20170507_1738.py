# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-05-07 17:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0027_auto_20170507_1727'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='num',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='produit',
            name='nombre_colonnes',
            field=models.CharField(choices=[('0', '0'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12')], default='2', max_length=2),
        ),
    ]
