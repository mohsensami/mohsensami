from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        # fields = ('id', 'title', 'body')
        fields = '__all__'
        # extra_kwargs = {
        #     'body' : {'write_only': True}
        # }