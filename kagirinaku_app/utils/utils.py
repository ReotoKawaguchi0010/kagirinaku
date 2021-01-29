import hashlib


def encode_sha256(encode_letter):
    s256 = hashlib.sha256(encode_letter.encode('utf-8')).hexdigest()
    return s256


def is_port_local_content_type(request):
    if int(request.get_port()) == 8000:
        return 'text/html'
    return 'application/json'
