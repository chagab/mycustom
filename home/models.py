#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class pageAccueil(models.Model):
    """ Django model that contains all the needed data to render the front page """
    # name of the instance of the model
    nom = models.CharField(max_length=140)
    # date at wich the instance was createde
    date = models.DateField()
    # logo that is used for the front page
    logo = models.ImageField(upload_to="home/logo/")
    # coordinate of the logo (in vh and vw)
    # see https://www.w3schools.com/CSSref/css_units.asp for explaination about the unit
    hauteur_logo = models.PositiveSmallIntegerField()
    decalage_logo = models.PositiveSmallIntegerField()
    hauteur_my_custom = models.PositiveSmallIntegerField()
    decalage_my_custom = models.PositiveSmallIntegerField()
    largeur_logo = models.PositiveSmallIntegerField()
    # wallpaper in case the video is not supported
    fondEcran = models.ImageField(upload_to="home/fond_ecran/")
    # the video of the front page in mp4 and webm in case the
    # browser cannot render mp4
    video_mp4 = models.FileField(upload_to="home/fond_ecran/")
    video_webm = models.FileField(upload_to="home/fond_ecran/", blank=True)
    slogan = models.CharField(max_length=140)
    # boolean that allows the instance of the model to be used
    confirm = models.BooleanField()
    # color of the title
    couleur_text = models.CharField(max_length=140)
    # size of the title
    taille_text = models.PositiveSmallIntegerField()

    class Meta:
        verbose_name = "Page d'accueil"
        verbose_name_plural = "Page d'accueil"

    def __str__(self):
        return self.nom
