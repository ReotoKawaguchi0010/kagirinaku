import json
from rest_framework.response import Response


def is_login(func):
    def wrapper(*args, **kwargs):
        request = args[0]
        response = Response({'login': 'false'}, content_type='application/json')
        print(request)
        response = func(*args, **kwargs)
        return response
    return wrapper