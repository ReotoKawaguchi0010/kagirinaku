import json

from rest_framework.response import Response

def get_login_data(request, response: Response, data: dict):
    user_session = request.session.get('user')
    if user_session is not None:
        response.data = {
            'login': 'true',
            'user': {
                'username': user_session['username'],
                'email': user_session['email'],
                'first_name': user_session['first_name'],
                'last_name': user_session['last_name'],
            },
        }
    return response