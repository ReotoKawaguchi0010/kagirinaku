import json

from kagirinaku_app.views.post.post_user import login, logout, signin
from kagirinaku_app.views.post.post_content import post_content

from rest_framework.views import Response

def main(request, response: Response):
    data = json.loads(request.body.decode('utf-8'))
    if data['type'] == 'login':
        response = login(request, response, data)
    elif data['type'] == 'logout':
        response = logout(request, response, data)
    elif data['type'] == 'signin':
        response = signin(request, response, data)
    elif data['type'] == 'post_content':
        response = post_content(request, response, data)
    return response