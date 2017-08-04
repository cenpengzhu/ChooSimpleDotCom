"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from django.template import RequestContext
from datetime import datetime
from app.models import timelineThing
from django.forms.models import model_to_dict
import json

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )

def timeline(request):
    """Renders the timeline page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/timeline.html',
        {
            'title':'timeline',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )

def querytimelineitem(request):
    """response the querytimelineitem request."""
    assert isinstance(request, HttpRequest)
    firstItem = request.POST.get('QueryBegin');
    lastItem = request.POST.get('QueryEnd');
    
    firstItem = 1;
    lastItem = 2;
    QueryResult = {};

    i = firstItem;
    while(i <= lastItem ) :
        QueryResult['result'+str(i)] = timelineThing.objects.get(id = i).to_dict();
        i += 1;

    ResponseJson = json.dumps(QueryResult);
    return HttpResponse(ResponseJson);
