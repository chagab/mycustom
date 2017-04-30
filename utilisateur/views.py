#-*- coding: utf-8 -*-
from django.shortcuts import render
from django.contrib.auth import authenticate
from models import Artiste
from forms import ArtisteForm, ConnectionForm, ParticulierForm, RevendeurForm, ProfessionelForm

def artisteInscription(request):
	if request.method == 'POST':
		artiste = ArtisteForm(request.POST)
		if artiste.is_valid():
			artiste.save()
			artiste.envoi = True
	else:
		artiste = ArtisteForm()
		artiste.envoi = False
	return artiste

def revendeurInscription(request):
	if request.method == 'POST':
		revendeur = RevendeurForm(request.POST)
		if revendeur.is_valid():
			revendeur.save()
			revendeur.envoi = True
	else:
		revendeur = RevendeurForm()
		revendeur.envoi = False
	return revendeur

def particulierInscription(request):
	if request.method == 'POST':
		particulier = ParticulierForm(request.POST)
		if particulier.is_valid():
			particulier.save()
			particulier.envoi = True
	else:
		particulier = ParticulierForm()
		particulier.envoi = False
	return particulier

def professionelInscription(request):
	if request.method == 'POST':
		professionel = ProfessionelForm(request.POST)
		if professionel.is_valid():
			professionel.save()
			professionel.envoi = True
	else:
		professionel = ProfessionelForm()
		professionel.envoi = False
	return professionel



def connection(request):
	if request.method == 'POST' :
		form = ConnectionForm(request.POST)
		if form.is_valid():
			user_name = form.cleaned_data['user_name']
			mail = form.cleaned_data['mail']
	else : 
		form = ConnectionForm()
	return form

def compte(request):
	return render(request, 'utilisateur/includes/compte.html', locals())