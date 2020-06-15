from rest_framework import serializers
from whitelists.models import WhiteList

class WhitelistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhiteList
        fields = '__all__'
