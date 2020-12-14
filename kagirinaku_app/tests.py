from django.test import TestCase

import json

# Create your tests here.



if __name__ == '__main__':
    test = [
        {'name': 'name', 'link': 'http://localhost:3000'},
        {'name': 'name1', 'link': 'http://localhost:3000'},
        {'name': 'name2', 'link': 'http://localhost:3000'},
        {'name': 'name3', 'link': 'http://localhost:3000'},
    ]

    print(json.dumps(test))
    