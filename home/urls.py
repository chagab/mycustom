#-*- coding: utf-8 -*-
from django.conf.urls import url, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    #url(r'^element/(?P<id>\d+)/$', views.afficher_element, name='element'),
]