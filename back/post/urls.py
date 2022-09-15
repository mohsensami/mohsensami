from django.urls import path
from . import views

app_name = 'post'
urlpatterns = [
    path('', views.all, name='all')
]