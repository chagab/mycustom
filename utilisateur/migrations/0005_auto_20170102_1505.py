# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-01-02 15:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utilisateur', '0004_auto_20161227_1211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artiste',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='utilisateur/avatars/'),
        ),
        migrations.AlterField(
            model_name='artiste',
            name='inscrit_newsletter',
            field=models.NullBooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='artiste',
            name='site_web',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='particulier',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='utilisateur/avatars/'),
        ),
        migrations.AlterField(
            model_name='particulier',
            name='inscrit_newsletter',
            field=models.NullBooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='particulier',
            name='site_web',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='professionel',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='utilisateur/avatars/'),
        ),
        migrations.AlterField(
            model_name='professionel',
            name='inscrit_newsletter',
            field=models.NullBooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='professionel',
            name='site_web',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='revendeur',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='utilisateur/avatars/'),
        ),
        migrations.AlterField(
            model_name='revendeur',
            name='inscrit_newsletter',
            field=models.NullBooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='revendeur',
            name='site_web',
            field=models.URLField(null=True),
        ),
    ]
