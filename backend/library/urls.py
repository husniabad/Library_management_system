from django.urls import path
from . import views

urlpatterns = [
    path('',views.test_view, name='test-view'),
    path('register/', views.registerUser, name='register'),
    path('products/',views.getProducts, name="products")

]