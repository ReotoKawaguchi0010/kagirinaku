from django.contrib import admin

from kagirinaku_app.models.post_content import PostContent
from kagirinaku_app.models.user import UserData


models = [UserData, PostContent]

for model in models:
    admin.site.register(model)