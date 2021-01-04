import json
import datetime

from rest_framework.response import Response
from rest_framework.decorators import api_view

from kagirinaku_app.models import User
from kagirinaku_app.utils.utils import encode_sha256

@api_view(['GET'])
def init_page(request):
    data = {}
    if request.method == 'GET':
        data = {'data': 'hello world', 'method': request.method}
    response = Response(data)
    return response

@api_view(['POST', 'GET'])
def login(request):
    data = {'login': 'false'}
    response = Response(data, content_type='application/json')
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        a = User.objects.get(id=1)
        if a.username == data['username'] and a.password == encode_sha256(data['password']):
            if request.session.get('user') is None:
                request.session['user'] = a.username
                if request.session.session_key is None:
                    request.session.create()
                response.set_cookie('sessionid', request.session.session_key,
                                    httponly=True)
                response['Access-Control-Allow-Credentials'] = 'true'
                response.data = {'type': 'set_cookie'}
    elif request.method == 'GET':
        if request.session.get('user') is not None:
            response.data = {'login': 'true'}
            response.content_type = 'text/html'
    return response


@api_view(['POST'])
def logout(request):
    response = Response({}, content_type='application/json')
    if(request.method == 'POST'):
        if request.session.get('user'):
            request.session.delete()
            response.delete_cookie('sessionid')
    return response

@api_view(['GET', 'POST'])
def signin(request):
    response = Response({}, content_type='application/json')
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data['username']
        password = encode_sha256(data['password'])
        email = data['email']
        time = datetime.datetime.now()
        try:
            user = User(username=username, password=password,
                        mail_address=email, datetime=time)
            user.save()
            response.data = {'type': 'success'}
        except:
            response.data = {'type': 'error'}
        response.data['bool'] = 'true'
    elif request.method == 'GET':
        response.content_type = 'text/html'
    return response