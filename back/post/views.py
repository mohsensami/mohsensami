from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view()
def all(request):
    return Response({'name': 'all'})