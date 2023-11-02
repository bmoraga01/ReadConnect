from datetime import datetime
import json
from biblioteca.models import *
from carga_libros.amazon_books import libros

def carga_categorias(categorias: list):
    print("creando autores")
    for x in categorias:
        Categoria.objects.create(categoria=x)
    return

def carga_autores(autores: list):
    print('creando categorias')
    for x in autores:
        Autor.objects.create(nombre=x)
    return

def busca_info():
    # f = open('ReadConnect/backend/carga_libros/amazon.books.json')
    # data = json.load(f)
    data = libros
    
    autores = []
    autores_unicos = []

    categorias = []
    categorias_unicas = []
    
    for x in data:
        for a in x['authors']:
            autores.append(a)

        for c in x['categories']:
            categorias.append(c)
    
    [autores_unicos.append(x) for x in autores if not x in autores_unicos]
    [categorias_unicas.append(x) for x in categorias if not x in categorias_unicas]
    
    return [autores_unicos, categorias_unicas]

def crear_libros():
    # f = open('ReadConnect/backend/carga_libros/amazon.books.json')
    # data = json.load(f)
    print('creando libros')
    data = libros
    
    for x in data:
        date_obj = None
        imagen = None
        short_desc = None
        long_desc = None
        
        if 'publishedDate' in x:
            date_obj = datetime.strptime(x['publishedDate']['$date'].split('T')[0], '%Y-%m-%d')
        if 'thumbnailUrl' in x:
            imagen = x['thumbnailUrl']
        if 'shortDescription' in x:
            short_desc = x['shortDescription']
        if 'longDescription' in x:
            long_desc = x['longDescription']
        
        try:
            libro = Libro(titulo=x['title'], isbn=x['isbn'], cantidad_paginas=x['pageCount'], fecha_publicacion=date_obj, imagen=imagen, descripcion_corta=short_desc, descripcion_larga=long_desc, estado=x['status'])
            libro.save()
            
            for a in x['authors']:
                try:
                    autor = Autor.objects.get(nombre=a)
                    AutorLibro.objects.create(libro=libro, autor=autor)
                except:
                    pass

            for c in x['categories']:
                try:
                    categoria = Categoria.objects.get(categoria=c)
                    CategoriaLibro.objects.create(libro=libro, categoria=categoria)
                except:
                    pass
        except:
            pass

def main():
    data = busca_info()
    carga_autores(data[0])
    carga_categorias(data[1])
    crear_libros()
    print('final')
    
# from carga_libros import carga_libros