from django.urls import path

from kagirinaku_app import views
urlpatterns = [
    path('', views.init_page),
    path('app/', views.app),
]
