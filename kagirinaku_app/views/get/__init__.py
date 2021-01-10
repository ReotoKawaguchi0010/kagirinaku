import json

from rest_framework.response import Response
def main(request, response: Response):
    data = json.loads(request.body.decode('utf-8'))
    return response