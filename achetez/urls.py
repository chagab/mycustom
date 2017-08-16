#-*- coding: utf-8 -*-
from django.conf.urls import url, include
from django.views.generic import TemplateView
from django.views.generic import ListView
from . import views
from .models import ListProduit, ListLogo

urlpatterns = [
    url(r'^addTextilCategorie/(?P<getter>\d+)/$', views.addTextilCategorie, name='addTextilCategorie'),
    url(r'^addTextilProduit/(?P<getter>\d+)/$', views.addTextilProduit, name='addTextilProduit'),
    url(r'^addLogo/(?P<getter>\d+)/$', views.addLogo, name='addLogo'),
    url(r'^searchTextil/$', ListProduit.as_view(), name = 'searchTextil'),
    url(r'^searchLogo/$', ListLogo.as_view(), name = 'searchLogo'),
    #url(r'^element/(?P<id>\d+)/$', views.afficher_element, name='element'),
    #url(r'^search/(?P<getter>\w+)/$', views.search, name='search'),
]
