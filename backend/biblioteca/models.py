from django.db import models
from .models_states import *
from users.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Autor(models.Model):
    nombre = models.CharField(max_length=250)
    
    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"
        
    def __str__(self):
        return self.nombre
    
class Categoria(models.Model):
    categoria = models.CharField(max_length=250)
    
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
        
    def __str__(self):
        return self.categoria
    
class Libro(models.Model):
    titulo              = models.CharField(max_length=250)
    isbn                = models.CharField(max_length=13, unique=True)
    cantidad_paginas    = models.PositiveIntegerField()
    fecha_publicacion   = models.DateField(blank=True, null=True)
    imagen              = models.URLField(blank=True, null=True)
    descripcion_corta   = models.TextField(blank=True, null=True)
    descripcion_larga   = models.TextField(blank=True, null=True)
    estado              = models.CharField(max_length=50, choices=STATUS, default='PUBLISH')
    autores             = models.ManyToManyField('biblioteca.Autor', through='biblioteca.AutorLibro')
    categorias          = models.ManyToManyField('biblioteca.categoria', through='biblioteca.CategoriaLibro')
    rankings            = models.ManyToManyField('users.User', through='biblioteca.RankingLibro')
    
    class Meta:
        verbose_name = "Libro"
        verbose_name_plural = "Libros"
        ordering = ('pk',)
        
    def __str__(self):
        return self.titulo

class AutorLibro(models.Model):
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = "Autor Libro"
        verbose_name_plural = "Autores Libros"
        
    def __str__(self):
        return 'Autor {} de libro {}'.format(self.autor, self.libro)
    
class CategoriaLibro(models.Model):
    libro       = models.ForeignKey(Libro, on_delete=models.CASCADE)
    categoria   = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = "Categoria Libro"
        verbose_name_plural = "Categorias Libros"
        
class RankingLibro(models.Model):
    libro               = models.ForeignKey(Libro, on_delete=models.CASCADE)
    user                = models.ForeignKey(User, on_delete=models.CASCADE)
    ranking             = models.IntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
    comentario          = models.TextField(max_length=300)
    fecha_creacion      = models.DateTimeField(auto_now_add=True)
    fecha_modificacion  = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Ranking del Libro"
        verbose_name_plural = "Rankings de Libros"
    
    def __str__(self):
        return '%s pts para el libro %s'%(self.ranking, self.libro)