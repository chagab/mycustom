#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

class pageAccueil(models.Model):
	nom                = models.CharField(max_length=140)
	date               = models.DateField()
	logo               = models.ImageField(upload_to="home/logo/")
	hauteur_logo       = models.PositiveSmallIntegerField()
	decalage_logo      = models.PositiveSmallIntegerField()
	hauteur_my_custom  = models.PositiveSmallIntegerField()
	decalage_my_custom = models.PositiveSmallIntegerField()
	largeur_logo       = models.PositiveSmallIntegerField()
	fondEcran          = models.ImageField(upload_to="home/fond_ecran/")
	video_mp4          = models.FileField(upload_to="home/fond_ecran/")
	video_webm         = models.FileField(upload_to="home/fond_ecran/", blank=True)
	slogan             = models.CharField(max_length=140)
	confirm            = models.BooleanField()
	couleur_text       = models.CharField(max_length=140)
	taille_text        = models.PositiveSmallIntegerField()

	class Meta:
		verbose_name = "Page d'accueil"
		verbose_name_plural = "Page d'accueil"

	def __str__(self):
		return self.nom
