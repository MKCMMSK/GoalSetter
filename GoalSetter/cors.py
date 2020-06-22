# https://www.techiediaries.com/django-cors/
# CORS Middleware

class CorsMiddleware(object):
    def process_response(self, req, resp):
        response["Access-Control-Allow-Origin"] = "*"
        return response

