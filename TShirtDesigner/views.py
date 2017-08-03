from django.shortcuts import render
from achetez.models import produit, achatLogo
# Create your views here.

def designer(request, id_produit):
	fond_from_view = id_produit
	achatLogo_from_view   = achatLogo.objects.all()
	produitLogo_from_view = produit.objects.all()
	return render(request, 'TShirtDesigner/index.html', locals())