# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-05-07 17:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0026_auto_20170507_1355'),
    ]

    operations = [
        migrations.RenameField(
            model_name='produit',
            old_name='image',
            new_name='dos',
        ),
        migrations.AddField(
            model_name='produit',
            name='droite',
            field=models.ImageField(default=1, upload_to='achetez/produit/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='produit',
            name='face',
            field=models.ImageField(default=1, upload_to='achetez/produit/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='produit',
            name='gauche',
            field=models.ImageField(default=1, upload_to='achetez/produit/'),
            preserve_default=False,
        ),
    ]
