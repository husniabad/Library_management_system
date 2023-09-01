from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from .serializers import  UserSerializer, UserSerializerWithToken,ProductSerializer
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status
from .models import Product



@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def test_view(request):
    # Your view logic
    return Response({'message': 'This is a protected view.'})

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['name'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def getProducts(request):
    

    products = Product.objects.all()

    
    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data})
