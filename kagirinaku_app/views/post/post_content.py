from rest_framework.views import Response
from kagirinaku_app.models.post_content import PostContent
from kagirinaku_app.utils.decorators.login import is_login


@is_login
def post_content(request, response: Response, data: dict):
    # if 'content' in data and 'title' in data:


    return response