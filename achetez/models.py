#-*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from cutsomise.models import customiseCategorie, customiseProduit
from django.views.generic import ListView
import re

COLUMN_CHOICES = (
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

SIZE_CHOICES = (
    ('lg', 'large'),
    ('md', 'medium'),
    ('sm', 'small'),
    ('xs', 'very small')
)

CONTOUR_CHOICES = (
    ('dotted', 'dotted'),
    ('dashed', 'dashed'),
    ('solid', 'solid'),
    ('double', 'double'),
    ('groove', 'groove'),
    ('ridge', 'ridge'),
    ('inset', 'inset'),
    ('outset', 'outset'),
    ('none', 'none'),
    ('hidden', 'hidden'),
)


class Produit(models.Model):
    """ Model that contains all the data to render one product :
        - All the photos of the product :
            - With a humans that wear it (front, back, left, right photos) --> "_style" photo fields
            - Just the product (front, back, left, right)
        -  All the videos of the product (in mp4 and webpm)
        - Its price
        - Its category
        - Its description
        - ... """
    # propriétés du produit
    nom = models.CharField(max_length=140)
    num = models.PositiveSmallIntegerField()
    confirm = models.BooleanField(default=True)
    date = models.DateField()
    prix = models.DecimalField(max_digits=20, decimal_places=2)
    categorie = models.ForeignKey(customiseCategorie)
    type_produit = models.ForeignKey(customiseProduit)
    text_description_short = models.CharField(max_length=200)
    text_description = models.TextField()
    tag = models.TextField(help_text="Entrer les tag séparés par des espaces.")
    # photo du produit
    face = models.ImageField(upload_to="achetez/produit/", blank=True)
    dos = models.ImageField(upload_to="achetez/produit/", blank=True)
    droite = models.ImageField(upload_to="achetez/produit/", blank=True)
    gauche = models.ImageField(upload_to="achetez/produit/", blank=True)
    face_style = models.ImageField(upload_to="achetez/produit/", blank=True)
    dos_style = models.ImageField(upload_to="achetez/produit/", blank=True)
    droite_style = models.ImageField(upload_to="achetez/produit/", blank=True)
    gauche_style = models.ImageField(upload_to="achetez/produit/", blank=True)
    # videos du produit
    # boolean that confirm the rendering of the video
    video_confirm = models.BooleanField()
    video_mp4 = models.FileField(upload_to="achetez/produit/", blank=True)
    video_webm = models.FileField(upload_to="achetez/produit/", blank=True)
    # propriétés de style
    # properties of the rendering of the product
    taille = models.CharField(max_length=2, choices=SIZE_CHOICES, default='md')
    nombre_colonnes = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='2')
    nombre_offset = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='0')
    couleur_text = models.CharField(max_length=7, default='#111111')
    couleur_fond = models.CharField(max_length=7, default='#FFFFFF')
    couleur_fond_image = models.CharField(max_length=7, default='#FFFFFF')
    contour_arrondi = models.PositiveSmallIntegerField(default=0)
    contour_arrondi_image = models.PositiveSmallIntegerField(default=0)
    type_contour = models.CharField(max_length=15, choices=CONTOUR_CHOICES, default='none')
    couleur_contour = models.CharField(max_length=7, default=0)
    epaisseur_contour = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name = "Textile"
        verbose_name_plural = "Textiles"

    def __str__(self):
        return self.nom

    def __unicode__(self):
        return self.nom


class ListProduit(ListView):
    """ Class that is used to render the results of the search bar. """
    model = Produit
    context_object_name = "list_produit"
    template_name = "achetez/Produit.html"
    paginate_by = 5

    def get_queryset(self, **kwargs):

        def date(search_key):
            # Search by date
            return Produit.objects.all().filter(date=search_key)

        def prix(search_key):
            # Search by price
            return Produit.objects.all().filter(prix=search_key)

        def categorie(search_key):
            # Search by category
            listOfProduit = []
            for categorie in [categorie for categorie in customiseCategorie.objects.all() if re.search(search_key.lower(), categorie.nom.lower())]:
                listOfProduit += customiseCategorie.objects.filter(categorie=categorie)
            return listOfProduit

        def default():
            # Output if nothing have been found
            return [Produit.objects.get(id=produit.id) for produit in Produit.objects.all() if re.search(search_key.lower(), produit.tag.lower())]

        switch = {
            'prix': prix,
            'date': date,
            'categorie': categorie,
            'default': default,
        }

        try:
            search_param = self.request.GET['search_param']
            try:
                search_key = self.request.GET['search_key']
                return switch[search_param](search_key)
            except:
                return []
        except:
            try:
                search_key = self.request.GET['search_key']
                return default(search_key)
            except:
                return Produit.objects.all()


class AchatLogo(models.Model):
    nom = models.CharField(max_length=140)
    logo = models.ImageField(upload_to="achetez/logo/")
    date = models.DateField()
    tag = models.TextField(help_text="Entrer les tag séparés par des espaces.")
    prix = models.DecimalField(max_digits=20, decimal_places=2)
    text_description_short = models.CharField(max_length=140)
    couleur_text = models.CharField(max_length=7, default='black')
    categorie = models.ForeignKey('AchatCategorie')
    taille = models.CharField(max_length=2, choices=SIZE_CHOICES, default='md')
    nombre_colonnes = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='3')
    nombre_offset = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='0')
    couleur_titre = models.CharField(max_length=7, default='white')
    confirm = models.BooleanField()

    class Meta:
        verbose_name = "Logo"
        verbose_name_plural = "Logos"

    def __str__(self):
        return self.nom

    def __unicode__(self):
        return self.nom


class ListLogo(ListView):
    model = AchatLogo
    context_object_name = "list_logo"
    template_name = "achetez/AchatLogo.html"
    paginate_by = 9

    def get_context_data(self, **kwargs):
        context = super(ListLogo, self).get_context_data(**kwargs)
        context['list_produit'] = Produit.objects.all()
        return context

    def get_queryset(self, **kwargs):
        # defining all the possibe way to search for product/logo
        def date(search_key):
            # on veut les logos qui match exactement la date donnée
            return AchatLogo.objects.all().filter(date=search_key)

        def prix(search_key):
            # on veut les logos qui match exactement le prix donné
            return AchatLogo.objects.all().filter(prix=search_key)

        def categorie(search_key):
            listOfLogo = []
            for categorie in [categorie for categorie in AchatCategorie.objects.all() if re.search(search_key.lower(), categorie.nom.lower())]:
                listOfLogo += AchatLogo.objects.filter(categorie=categorie)
            return listOfLogo

        def default(search_key):
            return [AchatLogo.objects.get(id=logo.id) for logo in AchatLogo.objects.all() if re.search(search_key.lower(), logo.tag.lower())]

        switch = {
            'prix': prix,
            'date': date,
            'categorie': categorie,
        }

        try:
            search_param = self.request.GET['search_param']
            try:
                search_key = self.request.GET['search_key']
                return switch[search_param](search_key)
            except:
                return []
        except:
            try:
                search_key = self.request.GET['search_key']
                return default(search_key)
            except:
                return AchatLogo.objects.all()


class AchatCategorie(models.Model):
    """ Model that contains all the data to render a logo """
    nom = models.CharField(max_length=140)
    titre = models.CharField(max_length=140)
    date = models.DateField()
    image = models.ImageField(upload_to="achetez/categorie/")
    taille = models.CharField(max_length=2, choices=SIZE_CHOICES, default='xs')
    nombre_colonnes = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='3')
    nombre_offset = models.CharField(max_length=2, choices=COLUMN_CHOICES, default='0')
    couleur_titre = models.CharField(max_length=7, default='white')
    confirm = models.BooleanField()

    class Meta:
        verbose_name = "Catégorie de l'onglet Achetez"
        verbose_name_plural = "Catégories de l'onglet Achetez"

    def __str__(self):
        return self.nom

    def __unicode__(self):
        return self.nom


class OngletAchetez(models.Model):
    """" Model that contains all the data for the rendering of the pannels "achetez" in the front page, i.e the slogan, the wide back image, the color of the text ..."""
    nom = models.CharField(max_length=140)
    date = models.DateField()
    image_titre = models.ImageField(upload_to="achetez/image_titre/")
    couleur_titre = models.CharField(max_length=140, default='white')
    description = models.TextField()
    confirm = models.BooleanField()

    class Meta:
        verbose_name = "Présentation de l'onglet Achetez"
        verbose_name_plural = "Présentation de l'onglet Achetez"

    def __str__(self):
        return self.nom

    def __unicode__(self):
        return self.nom
