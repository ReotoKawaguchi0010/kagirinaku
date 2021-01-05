from rest_framework.response import Response
from rest_framework.decorators import api_view

from kagirinaku_app.views import post, put, get, delete

@api_view(['GET'])
def init_page(request):
    data = {}
    if request.method == 'GET':
        data = {'data': 'hello world', 'method': request.method}
    response = Response(data)
    return response

@api_view(['POST', 'GET', 'PUT', 'DELETE'])
def app(request):
    response = Response({}, content_type='application/json')
    if request.method == 'POST':
        post.main(request, response)
    return response
