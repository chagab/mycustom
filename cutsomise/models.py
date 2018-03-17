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


# In the "customise" section there are two colums, one that lists all the type of categories of product
# (i.e SPORT, STREET WEAR, WORK CLOTHES ...) and the other one that list all the the type of products (i.e
# TSHIRT, JOGGING, SWEAT, JEANS ...)
# Adding an entry in each of these colum is done by adding an instance of one the models below that store
# all the visual features of its apperance
# this features are then passed to the html template customise.html


class customiseCategorie(models.Model):
	"""" Models that contains all the data to render one class of category in the "customize" section"""
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
	"""" Models that contains all the data to render one class of product in the "customize" section"""
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
	"""" Models that contains all the data for the rendering of the pannels "custommize" in the front page, i.e the slogan, the wide back image, the color of the text ..."""
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
