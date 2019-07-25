from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200)
    github_url = models.URLField(max_length=100, blank=True)
    live_url = models.URLField(max_length=100, blank=True)
    project_image = models.ImageField(upload_to='project_images/', blank=True)

    def __str__(self):
        return self.name
