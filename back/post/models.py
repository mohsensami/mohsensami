from django.db import models
from django.utils import timezone


class Post(models.Model):
    STATUS_CHOICES = (
        ('d', 'draft'),
        ('p', 'publish')
    )
    title = models.CharField(max_length=200, verbose_name='Title')
    slug = models.SlugField(max_length=100, unique=True, verbose_name='Slug')
    body = models.TextField()
    image = models.ImageField(upload_to='uploads/', default='default.jpg', verbose_name='Image')
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, verbose_name='Active/DeActive')
    sticky = models.BooleanField(default=False, verbose_name='isSticky?')
    publish = models.DateTimeField(default=timezone.now, verbose_name='Publish')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

    def __str__(self):
        return self.title