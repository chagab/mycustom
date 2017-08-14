#-*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404


# importation de tous les modèles
from .models import pageAccueil
from achetez.models import Produit, OngletAchetez, AchatLogo, AchatCategorie
from vendre.models import ongletVendre, methodeDescription
from cutsomise.models import customiseCategorie, customiseProduit, customiseOnglet
from collection_ephemere.models import mosaique

# importation de toutes les autres vues
from utilisateur.views import artisteInscription, revendeurInscription, particulierInscription, professionelInscription, connection

def home(request):
	# pour la mise en page du site
	achatLogo_from_view           = AchatLogo.objects.all()
	#ligneCategorie_from_view      = ligneCategorie.objects.all()
	achatCategorie_from_view      = AchatCategorie.objects.all()
	customiseOnglet_from_view     = customiseOnglet.objects.all()
	ongletAchetez_from_view       = OngletAchetez.objects.all()
	customise_produit_from_view   = customiseProduit.objects.all()
	customise_categorie_from_view = customiseCategorie.objects.all()
	methode_description_from_view = sorted(methodeDescription.objects.all(), key = lambda methode_description_from_view : methode_description_from_view.ordre)
	Onglet_vendre_from_view       = ongletVendre.objects.all()
	Produit_from_view             = Produit.objects.all()
	page_accueil_from_view        = pageAccueil.objects.all()
	mosaique_from_view            = mosaique.objects.all()
	# pour les formulaires d'adhésion
	artisteInscription_from_view      = artisteInscription(request)
	revendeurInscription_from_view    = revendeurInscription(request)
	particulierInscription_from_view  = particulierInscription(request)
	professionelInscription_from_view = professionelInscription(request)
	connection_from_view              = connection(request)

	return render(request, "home/home.html", locals())
