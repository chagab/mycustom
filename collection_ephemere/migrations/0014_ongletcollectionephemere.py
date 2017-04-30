# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-04-20 06:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection_ephemere', '0013_auto_20170311_1140'),
    ]

    operations = [
        migrations.CreateModel(
            name='ongletCollectionEphemere',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=140)),
                ('date', models.DateField()),
                ('image_titre', models.ImageField(upload_to='collectionEphemere/image_titre/')),
                ('couleur_titre', models.CharField(default='white', max_length=140)),
                ('confirm', models.BooleanField()),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name': "Pr\xe9sentation de l'onglet Achetez",
                'verbose_name_plural': "Pr\xe9sentation de l'onglet Achetez",
            },
        ),
    ]