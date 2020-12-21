from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def init_page(request):
    data = {}
    if request.method == 'GET':
        data = {'data': 'hello world', 'method': request.method}
    response = Response(data)
    return response

@api_view(['POST', 'GET'])
def login(request):
    print(request)
    data = {'login': 'false'}
    print(request.method)
    response = Response(data, content_type='application/json')
    if request.method == 'POST':
        if request.session.get('user') is None:
            request.session['user'] = 'user'
            if request.session.session_key is None:
                request.session.create()
            response.set_cookie('sessionid', request.session.session_key,
                                httponly=True)
            response['Access-Control-Allow-Credentials'] = 'true'
            response.data = {'type': 'set_cookie'}
            return response
    elif request.method == 'GET':
        if request.session.get('user') is not None:
            response.data = {'login': 'true'}
            return response
    return response


@api_view(['POST'])
def logout(request):
    response = Response({}, content_type='application/json')
    if(request.method == 'POST'):
        if request.session.get('user'):
            request.session.delete()
            response.delete_cookie('sessionid')
    return response
