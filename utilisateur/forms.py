#-*- coding: utf-8 -*-
from django import forms
from models import Utililsateur,Revendeur,Particulier,Professionel,Artiste

class ProfessionelForm(forms.ModelForm):
	class Meta : 
		model = Professionel
		fields = '__all__'
		exclude = ['user', 'envoi']

class ParticulierForm(forms.ModelForm):
	class Meta : 
		model = Particulier
		fields = '__all__'
		exclude = ['user', 'envoi']

class RevendeurForm(forms.ModelForm):
	class Meta : 
		model = Revendeur
		fields = '__all__'
		exclude = ['user', 'envoi']

class ArtisteForm(forms.ModelForm):
	class Meta : 
		model = Artiste
		fields = '__all__'
		exclude = ['user', 'envoi']

class ConnectionForm(forms.Form):
	user_name = forms.CharField(max_length=100)
	mail = forms.EmailField()