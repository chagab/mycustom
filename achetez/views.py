from django.shortcuts import render
from .models import element_collection_ephemere
# Create your views here.

def afficher_element(request):
	element = get_object_or_404(element_collection_ephemere, id=id)
	return render(request, 'collection_ephemer/aller_a_element.html', {'element' : element_collection_ephemere})