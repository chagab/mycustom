#-*- coding: utf-8 -*-
from django.conf.urls import url, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'designer/$', views.designer, name='TshirtDesigner'),
]