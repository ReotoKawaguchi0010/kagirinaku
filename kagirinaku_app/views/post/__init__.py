import json

from kagirinaku_app.views.post.post_user import login, logout, signin
from kagirinaku_app.views.post.post_content import post_content

from rest_framework.views import Response

def main(request, response: Response):
    if request.content_type == 'application/json':
        data = json.loads(request.body.decode('utf-8'))
        if data['type'] == 'login':
            response = login(request, response, data)
        elif data['type'] == 'logout':
            response = logout(request, response, data)
        elif data['type'] == 'signin':
            response = signin(request, response, data)
    else:
        response = post_content(request, response)
    return response