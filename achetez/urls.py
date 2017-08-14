#-*- coding: utf-8 -*-
from django.conf.urls import url, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^addTextilCategorie/(?P<getter>\d+)/$', views.addTextilCategorie, name='addTextilCategorie'),
    url(r'^addTextilProduit/(?P<getter>\d+)/$', views.addTextilProduit, name='addTextilProduit'),
    url(r'^addLogo/(?P<getter>\d+)/$', views.addLogo, name='addLogo'),
    #url(r'^element/(?P<id>\d+)/$', views.afficher_element, name='element'),
]
