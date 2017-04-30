#-*- coding: utf-8 -*-
from django.contrib import admin
from .models import customiseCategorie, customiseProduit, customiseOnglet

def confirm(modeladmin, request, queryset):
	queryset.update(confirm=True)
def de_confirm(modeladmin, request, queryset):
	queryset.update(confirm=False)


class customiseCategorieAdmin(admin.ModelAdmin):
	list_display  = ('nom', 'date', 'confirm', 'presentation')
	list_filter   = ('confirm',)
	ordering      = ('date',)
	search_fields = ('nom',)
	actions       = [
		confirm,
		de_confirm,
	 ]

	def presentation(self, produit):
		""" affiche les 40 premiers caractères de l'article """
		text = produit.text_description_short[0:60]
		if len(text) > 40:
			text += '...'
		else : 
			pass
		return text

class customiseProduitAdmin(admin.ModelAdmin):
	list_display  = ('nom', 'date', 'confirm',)
	list_filter   = ('confirm',)
	ordering      = ('date',)
	search_fields = ('nom',)
	actions       = [
		confirm,
		de_confirm,
	 ]	


class customiseOngletAdmin(admin.ModelAdmin):
	list_display  = ('nom', 'date', 'confirm', 'titre')
	list_filter   = ('confirm',)
	ordering      = ('date',)
	search_fields = ('nom', 'titre')	
	actions       = [
		confirm,
		de_confirm,
	 ]		


admin.site.register(customiseCategorie, customiseCategorieAdmin)
admin.site.register(customiseProduit, customiseProduitAdmin)
admin.site.register(customiseOnglet, customiseOngletAdmin)