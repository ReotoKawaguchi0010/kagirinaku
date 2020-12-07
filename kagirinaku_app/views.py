import json
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def init_page(request):
    data = {}
    if request.method == 'GET':
        data = {'data': 'hello world', 'method': request.method}
    response = Response(data)
    return response

