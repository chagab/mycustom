#-*- coding: utf-8 -*-
from django.contrib import admin
from .models import pageAccueil

# Slogan,Logo,FondEcran
# Register your models here.

def confirm(modeladmin, request, queryset):
	queryset.update(confirm=True)
def de_confirm(modeladmin, request, queryset):
	queryset.update(confirm=False)

class Page_accueilAdmin(admin.ModelAdmin):
	list_display = ('nom', 'date', 'slogan', 'confirm')
	list_filter   = ('confirm',)
	ordering = ('date',)
	search_fields = ('nom', 'slogan')
	actions = [
		confirm,
		de_confirm,
	 ]

admin.site.register(pageAccueil, Page_accueilAdmin)