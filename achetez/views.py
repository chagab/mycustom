#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from cutsomise.models import customiseCategorie, customiseProduit
from .models import Produit, AchatCategorie, AchatLogo
# Create your views here.

def afficher_element(request):
	element = get_object_or_404(element_collection_ephemere, id=id)
	return render(request, 'collection_ephemer/aller_a_element.html', {'element' : element_collection_ephemere})

#def afficher_element(request, id):
#	Element                = get_object_or_404(produit, id=id)
#	page_accueil_from_view = pageAccueil.objects.all()
#	return render(request, 'collection_ephemere/aller_a_element.html', locals())

def post(self, request, *args, **kwargs):
	if self.request.is_ajax():
		return self.ajax(request)

def addTextilCategorie(request, getter) :
	""" Vue qui envoit les données nécéssaires pour ajouter les textiles de la partie
	Catégorie dans la rubrique CUSTOMISER de la page principale """
	textilCategorie = customiseCategorie.objects.get(id = getter)
	textil = Produit.objects.all().filter(categorie = textilCategorie)
	json_models = serializers.serialize("json", textil)
	return HttpResponse(json_models)

def addTextilProduit(request, getter) :
	""" Vue qui envoit les données nécéssaires pour ajouter les textiles de la partie
	Produit dans la rubrique CUSTOMISER de la page principale """
	textilProduit = customiseProduit.objects.get(id = getter)
	produit = Produit.objects.all().filter(type_produit = textilProduit)
	json_models = serializers.serialize("json", produit)
	return HttpResponse(json_models)

def addLogo(request, getter) :
	""" Vue qui envoit les données nécéssaires pour ajouter un logo
	dans la rubrique ACHAT de la page principale """
	logoCategorie = AchatCategorie.objects.get(id = getter)
	logo = AchatLogo.objects.all().filter(categorie = logoCategorie)
	json_models = serializers.serialize("json", logo)
	return HttpResponse(json_models)

def search(request, getter) :
	""" Vue qui envoit les données nécéssaires pour ajouter un logo
	dans la rubrique ACHAT de la page principale """
	logoCategorie = AchatCategorie.objects.get(id = getter)
	logo = AchatLogo.objects.all().filter(categorie = logoCategorie)
	json_models = serializers.serialize("json", logo)
	return HttpResponse(json_models)
