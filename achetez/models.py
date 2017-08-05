#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from cutsomise.models import customiseCategorie, customiseProduit

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

class produit(models.Model):
	#propriétés du produit
	nom                    = models.CharField(max_length=140)
	num                    = models.PositiveSmallIntegerField()
	confirm                = models.BooleanField(default=True)
	date                   = models.DateField()
	prix                   = models.DecimalField(max_digits=20, decimal_places=2)
	categorie              = models.ForeignKey(customiseCategorie)
	type_produit           = models.ForeignKey(customiseProduit)
	text_description_short = models.CharField(max_length=200)
	text_description       = models.TextField()
	#photo du produit
	face         = models.ImageField(upload_to="achetez/produit/", blank=True)
	dos          = models.ImageField(upload_to="achetez/produit/", blank=True)
	droite       = models.ImageField(upload_to="achetez/produit/", blank=True)
	gauche       = models.ImageField(upload_to="achetez/produit/", blank=True)
	face_style   = models.ImageField(upload_to="achetez/produit/", blank=True)
	dos_style    = models.ImageField(upload_to="achetez/produit/", blank=True)
	droite_style = models.ImageField(upload_to="achetez/produit/", blank=True)
	gauche_style = models.ImageField(upload_to="achetez/produit/", blank=True)
	#propriétés de style 
	taille                = models.CharField(max_length=2,choices=SIZE_CHOICES,default='md')
	nombre_colonnes       = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='2')
	nombre_offset         = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='0')
	couleur_text          = models.CharField(max_length=7,default='#111111')
	couleur_fond          = models.CharField(max_length=7,default='#FFFFFF')
	couleur_fond_image    = models.CharField(max_length=7,default='#FFFFFF')
	contour_arrondi       = models.PositiveSmallIntegerField(default=0)
	contour_arrondi_image = models.PositiveSmallIntegerField(default=0)
	type_contour          = models.CharField(max_length=15,choices=CONTOUR_CHOICES,default='none')
	couleur_contour       = models.CharField(max_length=7, default='')
	epaisseur_contour     = models.PositiveSmallIntegerField(default=0)

	class Meta:
		verbose_name = "produits de l'onglet Achetez"
		verbose_name_plural = "produits de l'onglet Achetez"
	
	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom

class achatLogo(models.Model):
	nom                    = models.CharField(max_length=140)
	logo                   = models.ImageField(upload_to="achetez/logo/")
	date                   = models.DateField()
	text_description_short = models.CharField(max_length=140)
	couleur_text           = models.CharField(max_length=7,default='black')
	categorie              = models.ForeignKey('achatCategorie')
	taille                 = models.CharField(max_length=2,choices=SIZE_CHOICES,default='md')
	nombre_colonnes        = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='3')
	nombre_offset          = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='0')
	couleur_titre          = models.CharField(max_length=7,default='white')
	confirm                = models.BooleanField()

	class Meta:
		verbose_name = "logo de l'onglet Achetez"
		verbose_name_plural = "logos de l'onglet Achetez"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom


class achatCategorie(models.Model):
	nom             = models.CharField(max_length=140)
	titre           = models.CharField(max_length=140)
	date            = models.DateField()
	image           = models.ImageField(upload_to="achetez/categorie/")
	taille          = models.CharField(max_length=2,choices=SIZE_CHOICES,default='xs')
	nombre_colonnes = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='3')
	nombre_offset   = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='0')
	couleur_titre   = models.CharField(max_length=7,default='white')
	confirm         = models.BooleanField()

	class Meta:
		verbose_name = "Catégorie de l'onglet Achetez"
		verbose_name_plural = "Catégories de l'onglet Achetez"

	def __str__(self):
		return self.nom

	def __unicode__(self):
		return self.nom

class ongletAchetez(models.Model):
	nom           = models.CharField(max_length=140)
	date          = models.DateField()
	image_titre   = models.ImageField(upload_to="achetez/image_titre/")
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
