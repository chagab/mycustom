#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

COLUMN_CHOICES  = (
	('0', '0'),
	('1', '1'),
	('2', '2'),
	('3', '3'),
	('4', '4'),
	('5', '5'),
	('6', '6'),
	('7', '7'),
	('8', '8'),
	('9', '9'),
	('10', '10'),
	('11', '11'),
	('12', '12')
)

SIZE_CHOICES    = (
		('lg', 'large'),
		('md', 'medium'),
		('sm', 'small'),
		('xs', 'very small')
	)

class customiseCategorie(models.Model):
	nom                    = models.CharField(max_length=140)
	date                   = models.DateField()
	image                  = models.ImageField(upload_to="customise/categorie/")
	text_description_short = models.CharField(max_length=200)
	couleur_text           = models.CharField(max_length=7,default='black')
	couleur_titre          = models.CharField(max_length=7,default='white')
	confirm                = models.BooleanField()

	class Meta:
		verbose_name = "Catégorie de l'onglet Customise"
		verbose_name_plural = "Catégories de l'onglet Customise"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom

class customiseProduit(models.Model):
	nom                    = models.CharField(max_length=140)
	date                   = models.DateField()
	image                  = models.ImageField(upload_to="customise/produit/")
	couleur_text           = models.CharField(max_length=7,default='black')
	confirm                = models.BooleanField()

	class Meta:
		verbose_name = "Produit de l'onglet Customise"
		verbose_name_plural = "Produits de l'onglet Customise"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom

class customiseOnglet(models.Model):
	nom           = models.CharField(max_length=140)
	titre         = models.CharField(max_length=140)
	date          = models.DateField()
	image_titre   = models.ImageField(upload_to="customise/image_titre/")
	couleur_titre = models.CharField(max_length=140, default='white')
	description   = models.TextField()
	confirm       = models.BooleanField()

	class Meta:
		verbose_name = "Présentation de l'onglet Customise"
		verbose_name_plural = "Présentation de l'onglet Customise"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom