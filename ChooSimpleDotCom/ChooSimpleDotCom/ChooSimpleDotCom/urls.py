"""
Definition of urls for ChooSimpleDotCom.
"""

from datetime import datetime
from django.conf.urls import url
from django.conf import settings  
import django.contrib.auth.views
from django.conf.urls import include
from django.contrib import admin

import app.forms
import app.views


# Uncomment the next lines to enable the admin:
# from django.conf.urls import include
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    # Examples:
    url(r'^$', app.views.home, name='home'),
    url(r'^contact$', app.views.contact, name='contact'),
    url(r'^about', app.views.about, name='about'),
    url(r'^timeline$',app.views.timeline, name='timeline'),   
    url(r'^querytimelineitem$',app.views.querytimelineitem,name='querytimelineitem'),
    url(r'^login/$',
        django.contrib.auth.views.login,
        {
            'template_name': 'app/login.html',
            'authentication_form': app.forms.BootstrapAuthenticationForm,
            'extra_context':
            {
                'title': 'Log in',
                'year': datetime.now().year,
            }
        },
        name='login'),
    url(r'^logout$',
        django.contrib.auth.views.logout,
        {
            'next_page': '/',
        },
        name='logout'),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
]


from django.contrib.staticfiles.urls import staticfiles_urlpatterns
 
urlpatterns += staticfiles_urlpatterns()