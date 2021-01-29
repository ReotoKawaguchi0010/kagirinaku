from rest_framework.views import Response


def post_content(request, response: Response, data: dict):
    print(data)
    return response