from django.urls import path

from kagirinaku_app import views
urlpatterns = [
    path('', views.init_page, name='init_page'),
    path('login', views.login ),
    path('logout', views.logout),
    path('signin', views.signin),
]
