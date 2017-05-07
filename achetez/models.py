#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from cutsomise.models import customiseCategorie

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
	nom                    = models.CharField(max_length=140)
	confirm                = models.BooleanField()
	date                   = models.DateField()
	image                  = models.ImageField(upload_to="achetez/produit/")
	text_description_short = models.CharField(max_length=200)
	text_description       = models.TextField()
	prix                   = models.DecimalField(max_digits=20, decimal_places=2)
	taille                 = models.CharField(max_length=2,choices=SIZE_CHOICES,default='md')
	nombre_colonnes        = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='12')
	nombre_offset          = models.CharField(max_length=2,choices=COLUMN_CHOICES,default='0')
	couleur_text           = models.CharField(max_length=7,default='#111111')
	couleur_fond           = models.CharField(max_length=7,default='#FFFFFF')
	couleur_fond_image     = models.CharField(max_length=7,default='#FFFFFF')
	contour_arrondi        = models.PositiveSmallIntegerField(default=0)
	contour_arrondi_image  = models.PositiveSmallIntegerField(default=0)
	type_contour           = models.CharField(max_length=15,choices=CONTOUR_CHOICES,default='none')
	couleur_contour        = models.CharField(max_length=7, default='')
	epaisseur_contour      = models.PositiveSmallIntegerField(default=0)
	categorie              = models.ForeignKey(customiseCategorie)

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

class ligneCategorie(models.Model):
	nom         = models.CharField(max_length=140)
	categorie_1 = models.ForeignKey('achatCategorie', related_name='categorie_1')
	categorie_2 = models.ForeignKey('achatCategorie', related_name='categorie_2', null=True, blank=True)
	categorie_3 = models.ForeignKey('achatCategorie', related_name='categorie_3', null=True, blank=True)
	confirm     = models.BooleanField()

	class Meta:
		verbose_name = "Ligne de catégorie de l'onglet Achetez "
		verbose_name_plural = "Ligne de catégorie de l'onglet Achetez "

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
