# Generated by Django 2.2.3 on 2019-07-15 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='photo',
            field=models.ImageField(blank=True, upload_to='photos/'),
        ),
        migrations.AddField(
            model_name='profile',
            name='resume',
            field=models.FileField(blank=True, upload_to='files/'),
        ),
    ]
