"""my_custom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

import home.views
import achetez.views
import utilisateur.views
import TShirtDesigner.views

# all the possible urls of the website 
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('home.urls')),
    url(r'^utilisateur/', include('utilisateur.urls')),
    url(r'^TshirtDesigner/', include('TShirtDesigner.urls')),
    url(r'^achat/', include('achetez.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
