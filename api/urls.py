from django.urls import path
from . import views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [

    path('', views.getRoutes),
    path('contacts/', views.getContacts),
    path('contact/', views.createContact),
    # path('projects/<str:pk>/vote/', views.projectVote),

    # path('remove-tag/', views.removeTag)
]