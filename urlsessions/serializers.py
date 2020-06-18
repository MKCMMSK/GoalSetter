from rest_framework import serializers
from urlsessions.models import URLSession

class URLSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = URLSession
        fields = '__all__'