#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


CONTOUR_CHOICES = (
	('dotted','dotted'),
	('dashed','dashed'),
	('solid','solid'),
	('double','double'),
	('groove','groove'),
	('ridge','ridge'),
	('inset','inset'),
	('outset','outset'),
	('none','none'),
	('hidden','hidden'),
)

COLONNE_CHOICES = (
	('colonne_1','colonne_1'),
	('colonne_2','colonne_2'),
	('colonne_3','colonne_3'),
)

class mosaique(models.Model):
	"""" Model that contains all the data for the rendering of one add in the "collection epehemere" section """
	image            = models.ImageField(upload_to="collection_ephemere/mosaique")
	titre            = models.CharField(max_length=140)
	text_description = models.TextField()
	colonne          = models.CharField(max_length=15,choices=COLONNE_CHOICES,default='none')
	confirm          = models.BooleanField()
	video 	         = models.BooleanField()
	video_mp4        = models.FileField(upload_to="collection_ephemere/video/", blank=True)
	video_webm       = models.FileField(upload_to="collection_ephemere/video/", blank=True)


class collectionEphemere(models.Model):
	""" THIS MODEL IS OBSELETE """
	image                 = models.ImageField(upload_to="collection_ephemere/image/")
	text_description      = models.TextField()
	couleur_text          = models.CharField(max_length=7,default='#111111')
	couleur_fond          = models.CharField(max_length=7,default='#FFFFFF')
	contour_arrondi       = models.PositiveSmallIntegerField(default=0)
	contour_arrondi_image = models.PositiveSmallIntegerField(default=0)
	type_contour          = models.CharField(max_length=15,choices=CONTOUR_CHOICES,default='none')
	couleur_contour       = models.CharField(max_length=7)
	epaisseur_contour     = models.PositiveSmallIntegerField(default=0)
	pub               	  = models.BooleanField()

class ongletCollectionEphemere(models.Model):
	"""" Model that contains all the data for the rendering of the pannels "collection ephemere" in the front page, i.e the slogan, the wide back image, the color of the text ..."""
	nom           = models.CharField(max_length=140)
	date          = models.DateField()
	image_titre   = models.ImageField(upload_to="collectionEphemere/image_titre/")
	couleur_titre = models.CharField(max_length=140, default='white')
	description   = models.TextField()
	confirm       = models.BooleanField()

	class Meta:
		verbose_name = "Présentation de l'onglet Achetez"
		verbose_name_plural = "Présentation de l'onglet Achetez"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom
