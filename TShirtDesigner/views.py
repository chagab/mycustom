from django.shortcuts import render

# Create your views here.

def designer(request):
	return render(request, 'TShirtDesigner/index.html')
