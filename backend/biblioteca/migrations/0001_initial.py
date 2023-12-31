# Generated by Django 4.2 on 2023-10-30 03:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Autor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Autor',
                'verbose_name_plural': 'Autores',
            },
        ),
        migrations.CreateModel(
            name='AutorLibro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.autor')),
            ],
            options={
                'verbose_name': 'Autor Libro',
                'verbose_name_plural': 'Autores Libros',
            },
        ),
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoria', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
            },
        ),
        migrations.CreateModel(
            name='CategoriaLibro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.categoria')),
            ],
            options={
                'verbose_name': 'Categoria Libro',
                'verbose_name_plural': 'Categorias Libros',
            },
        ),
        migrations.CreateModel(
            name='Libro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=250)),
                ('isbn', models.CharField(max_length=13, unique=True)),
                ('cantidad_paginas', models.PositiveIntegerField()),
                ('fecha_publicacion', models.DateField(blank=True, null=True)),
                ('imagen', models.URLField(blank=True, null=True)),
                ('descripcion_corta', models.TextField(blank=True, null=True)),
                ('descripcion_larga', models.TextField(blank=True, null=True)),
                ('estado', models.CharField(choices=[('PUBLISH', 'Publish'), ('MEAP', 'Meap')], default='PUBLISH', max_length=50)),
                ('autores', models.ManyToManyField(through='biblioteca.AutorLibro', to='biblioteca.autor')),
                ('categorias', models.ManyToManyField(through='biblioteca.CategoriaLibro', to='biblioteca.categoria')),
            ],
            options={
                'verbose_name': 'Libro',
                'verbose_name_plural': 'Libros',
            },
        ),
        migrations.AddField(
            model_name='categorialibro',
            name='libro',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.libro'),
        ),
        migrations.AddField(
            model_name='autorlibro',
            name='libro',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='biblioteca.libro'),
        ),
    ]
