#-*- coding: utf-8 -*-
from django.contrib import admin
from .models import Produit, AchatCategorie, OngletAchetez, AchatLogo
# Register your models here.

def size_xs(modeladmin, request, queryset):
	queryset.update(taille='xs')
def size_sm(modeladmin, request, queryset):
	queryset.update(taille='sm')
def size_md(modeladmin, request, queryset):
	queryset.update(taille='md')
def size_lg(modeladmin, request, queryset):
	queryset.update(taille='lg')
def column_1(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='1')
def column_2(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='2')
def column_3(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='3')
def column_4(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='4')
def column_5(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='5')
def column_6(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='6')
def column_7(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='7')
def column_8(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='8')
def column_9(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='9')
def column_10(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='10')
def column_11(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='11')
def column_12(modeladmin, request, queryset):
	queryset.update(nombre_colonnes='12')
def confirm(modeladmin, request, queryset):
	queryset.update(confirm=True)
def de_confirm(modeladmin, request, queryset):
	queryset.update(confirm=False)

class ProduitAdmin(admin.ModelAdmin):
	list_display = ('nom', 'date', 'confirm', 'taille', 'nombre_colonnes', 'presentation')
	list_filter   = ('confirm',)
	ordering = ('date',)
	search_fields = ('nom',)
	actions = [
		confirm,
		de_confirm,
		size_xs,
	 	size_sm,
	 	size_md,
	 	size_lg,
	 	column_1,
	 	column_2,
	 	column_3,
	 	column_4,
	 	column_5,
	 	column_6,
	 	column_7,
	 	column_8,
	 	column_9,
	 	column_10,
	 	column_11,
	 	column_12,
	 ]

	def presentation(self, produit):
		""" affiche les 40 premiers caractères de l'article """
		text = produit.text_description[0:60]
		if len(text) > 40:
			text += '...'
		else :
			pass
		return text

	presentation.shor_description = u'Aperçu du contenu'

class LogoAdmin(admin.ModelAdmin):
	list_display = ('nom', 'categorie' ,'date', 'confirm',)
	list_filter   = ('confirm', 'categorie')
	ordering = ('date',)
	search_fields = ('nom',)
	actions = [
		confirm,
		de_confirm,
		size_xs,
	 	size_sm,
	 	size_md,
	 	size_lg,
	 	column_1,
	 	column_2,
	 	column_3,
	 	column_4,
	 	column_5,
	 	column_6,
	 	column_7,
	 	column_8,
	 	column_9,
	 	column_10,
	 	column_11,
	 	column_12,
	 ]

class CategorieAdmin(admin.ModelAdmin) :
		list_display = ('nom' ,'date', 'confirm',)
		list_filter   = ('confirm',)
		ordering = ('date',)
		search_fields = ('nom',)
		actions = [
			confirm,
			de_confirm,
			size_xs,
	 		size_sm,
	 		size_md,
	 		size_lg,
	 		column_1,
	 		column_2,
	 		column_3,
	 		column_4,
			column_5,
		 	column_6,
	 		column_7,
	 		column_8,
	 		column_9,
	 		column_10,
	 		column_11,
	 		column_12,
		]


admin.site.register(Produit, ProduitAdmin)
admin.site.register(AchatCategorie,CategorieAdmin)
admin.site.register(OngletAchetez)
#admin.site.register(ligneCategorie)
admin.site.register(AchatLogo,LogoAdmin)
