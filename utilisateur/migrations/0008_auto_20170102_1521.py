# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-01-02 15:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilisateur', '0007_auto_20170102_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artiste',
            name='signature',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='artiste',
            name='site_web',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='particulier',
            name='signature',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='particulier',
            name='site_web',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='professionel',
            name='signature',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='professionel',
            name='site_web',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='revendeur',
            name='signature',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='revendeur',
            name='site_web',
            field=models.URLField(blank=True, null=True),
        ),
    ]