from django.shortcuts import render
from achetez.models import Produit, AchatLogo
# Create your views here.

def designer(request, id_produit):
	fond_from_view = id_produit
	achatLogo_from_view   = AchatLogo.objects.all()
	produitLogo_from_view = Produit.objects.all()
	return render(request, 'TShirtDesigner/index.html', locals())
