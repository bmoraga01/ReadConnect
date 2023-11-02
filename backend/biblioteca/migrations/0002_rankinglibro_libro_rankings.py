# Generated by Django 4.2 on 2023-10-31 01:00

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('biblioteca', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RankingLibro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ranking', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('comentario', models.TextField(max_length=300)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fecha_modificacion', models.DateTimeField(auto_now=True)),
                ('libro', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.libro')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Ranking del Libro',
                'verbose_name_plural': 'Rankings de Libros',
            },
        ),
        migrations.AddField(
            model_name='libro',
            name='rankings',
            field=models.ManyToManyField(through='biblioteca.RankingLibro', to=settings.AUTH_USER_MODEL),
        ),
    ]