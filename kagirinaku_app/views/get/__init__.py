import json

from kagirinaku_app.views.get.get_users import get_login_data

from rest_framework.response import Response

def main(request, response: Response):
    data = dict(request.GET)
    if 'type' in data:
        if data['type'][0] == 'userInitial':
            response = get_login_data(request, response, data)
    return response