from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .serializers import ContactSerializer
from contacts.models import Contact
from rest_framework import status


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {'GET': '/api/contacts'},
        # {'GET': '/api/projects/id'},
        # {'POST': '/api/projects/id/vote'},

        # {'POST': '/api/users/token'},
        # {'POST': '/api/users/token/refresh'},
    ]
    return Response(routes)


@api_view(['GET'])
def getContacts(request):
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createContact(request):
    info = ContactSerializer(data=request.data)
    if info.is_valid():
        info.save()
        return Response({'message': 'OK'}, status=status.HTTP_201_CREATED)
    else:
        return Response(info.errors, status=status.HTTP_400_BAD_REQUEST)