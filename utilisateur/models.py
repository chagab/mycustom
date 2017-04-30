#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

USER_CHOICES  = (
	('Revendeur', 'Revendeur'),
	('Particulier', 'Particulier'),
	('Professionel', 'Professionel'),
	('Artiste', 'Artiste'),
)

class Utililsateur(models.Model):
	user               = models.OneToOneField(User,blank=True,null=True)
	nom                = models.CharField(max_length=140)
	prenom             = models.CharField(max_length=140)
	mail               = models.EmailField(max_length=254)
	site_web           = models.URLField(null=True,blank=True)
	avatar             = models.ImageField(upload_to="utilisateur/avatars/",blank=True, null=True)
	signature          = models.TextField(null=True,blank=True)
	inscrit_newsletter = models.NullBooleanField(default=False,blank=True, null=True)
	envoi              = models.BooleanField(default=False)

	class Meta:
		abstract = True

class Revendeur(Utililsateur):

	def __str__(self) : 
		return self.prenom + ' ' + self.nom

class Particulier(Utililsateur):

	def __str__(self) : 
		return self.prenom + ' ' + self.nom

class Professionel(Utililsateur):

	def __str__(self) : 
		return self.prenom + ' ' + self.nom

class Artiste(Utililsateur):

	def __str__(self) : 
		return self.prenom + ' ' + self.nom