# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-11-04 18:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('achetez', '0003_auto_20161023_2020'),
    ]

    operations = [
        migrations.CreateModel(
            name='achat_produit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=140)),
                ('date', models.DateField()),
                ('image', models.ImageField(upload_to='achetez/categorie/')),
                ('couleur_titre', models.CharField(default='white', max_length=7)),
                ('confirm', models.BooleanField()),
            ],
        ),
    ]
