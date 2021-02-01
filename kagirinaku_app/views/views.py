from rest_framework.response import Response
from rest_framework.decorators import api_view

from kagirinaku_app.views import post, put, get, delete
from kagirinaku_app.utils.decorators.response import json_response

@api_view(['GET'])
@json_response(bool='true')
def init_page(request):
    data = {}
    if request.method == 'GET':
        data = {'data': 'hello world', 'method': request.method}
    response = Response(data)
    return response



@api_view(['POST', 'GET', 'PUT', 'DELETE'])
@json_response(bool='true')
def app(request, response):
    if request.method == 'POST':
        response = post.main(request, response)
    elif request.method == 'GET':
        response = get.main(request, response)
    return response
