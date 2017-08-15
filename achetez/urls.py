#-*- coding: utf-8 -*-
from django.conf.urls import url, include
from django.views.generic import TemplateView
from django.views.generic import ListView
from . import views
from .models import ListProduit

urlpatterns = [
    url(r'^addTextilCategorie/(?P<getter>\d+)/$', views.addTextilCategorie, name='addTextilCategorie'),
    url(r'^addTextilProduit/(?P<getter>\d+)/$', views.addTextilProduit, name='addTextilProduit'),
    url(r'^addLogo/(?P<getter>\d+)/$', views.addLogo, name='addLogo'),
    #url(r'^search/(?P<getter>\w+)/$', views.search, name='search'),
    url(r'^search/$', ListProduit.as_view(), name = 'search'),

    #url(r'^element/(?P<id>\d+)/$', views.afficher_element, name='element'),
]
