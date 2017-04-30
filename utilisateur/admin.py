#-*- coding: utf-8 -*-
from django.contrib import admin
from .models import Revendeur,Particulier,Professionel,Artiste
# Register your models here.

admin.site.register(Revendeur)
admin.site.register(Particulier)
admin.site.register(Professionel)
admin.site.register(Artiste)