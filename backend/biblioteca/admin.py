from django.contrib import admin
from .models import *

@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
    list_display = ['pk', 'nombre']
    search_fields = ['nombre']
    
@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['pk', 'categoria']
    search_fields = ['categoria']
    
class AutoresInline(admin.TabularInline):
    model = AutorLibro
class CategoriasInline(admin.TabularInline):
    model = CategoriaLibro
    
@admin.register(Libro)
class LibroAdmin(admin.ModelAdmin):
    list_display = ['pk', 'titulo', 'fecha_publicacion','isbn']
    search_fields = ['titulo']
    inlines = [AutoresInline, CategoriasInline]