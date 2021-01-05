import json

from kagirinaku_app.views.post.post_user import login, logout

from rest_framework.views import Response

def main(request, response: Response):
    data = json.loads(request.body.decode('utf-8'))
    if data['type'] == 'login':
        response = login(request, response, data)
    elif data['type'] == 'logout':
        response = logout(request, response, data)
    return response