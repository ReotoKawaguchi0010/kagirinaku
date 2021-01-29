import datetime

from django.contrib.auth.models import User
from rest_framework.views import Response
from kagirinaku_app.models.user import UserData


def signin(request, response: Response, data: dict):
    if 'username' in data and 'password' in data and 'email' in data:
        username = data['username']
        password = data['password']
        email = data['email']
        user_data = UserData()
        user_data.save_user_data(username=username, password=password, email=email)

    return response


def login(request, response: Response, data: dict):
    if not bool(request.session.get('user')):
        if 'username' in data and 'password' in data:
            username = data['username']
            password = data['password']
            if User.objects.filter(username=username).exists():
                user = User.objects.get(username=username)
                if user.check_password(password):
                    request.session['user'] = {
                        'username': user.username,
                        'email': user.email,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'login_at': str(datetime.datetime.now()),
                    }
                    if not request.session.session_key:
                        request.session.create()
                    response.set_cookie('sessionid', request.session.session_key)
                    response.data = {'login': 'true',
                                     'user': {
                                         'username': user.username,
                                         'email': user.email,
                                         'first_name': user.first_name,
                                         'last_name': user.last_name,
                                     },
                                     }
                else:
                    response.data = {'login': 'false'}
    else:
        response.data = {'login': 'true'}
    return response


def logout(request, response: Response, data: dict):
    if not request.session.is_empty():
        request.session.delete('user')
        response.delete_cookie('sessionid')
        response.data = {'login': 'false'}
    return response
