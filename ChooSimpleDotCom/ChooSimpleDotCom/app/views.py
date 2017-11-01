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
from django.views.decorators.csrf import csrf_exempt

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

@csrf_exempt 
def querytimelineitem(request):
    """response the querytimelineitem request."""
    assert isinstance(request, HttpRequest);
    firstItem = -1;
    lastItem = -1;
    firstItem = request.POST.get('queryBegin');
    lastItem = request.POST.get('queryEnd');

    if firstItem is None :
        firstItem = 1;
    if lastItem  is None :
        lastItem = -1;

    QueryResult = {};

    i = firstItem;
    while(i <= lastItem or lastItem == -1) :
        try :
            temp = timelineThing.objects.get(id = i);
            QueryResult['result'+str(i)] = temp.to_dict();
            i += 1;
        except :
            break;

    ResponseJson = json.dumps(QueryResult);
    return HttpResponse(ResponseJson);
