from django.db import models


class Profile(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=50)
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=50)
    description = models.CharField(max_length=120)
    about = models.TextField()
    skills = models.CharField(max_length=200)
    linkedin = models.URLField(max_length=50, blank=True)
    github = models.URLField(max_length=50, blank=True)
    facebook = models.URLField(max_length=50, blank=True)
    instagram = models.URLField(max_length=50, blank=True)
    twitter = models.URLField(max_length=50, blank=True)
    photo = models.ImageField(upload_to='photos/', blank=True)
    resume = models.FileField(upload_to='files/', blank=True)

    def __str__(self):
        return self.first_name
