from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.db.models import Q

class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    # authentication_classes = [IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        filtro = self.request.GET
        
        pages = filtro.get('page')
        pages = int(pages) if pages else None
        
        categorias = filtro.getlist('categoria')
        autores = filtro.getlist('autor')
        fecha_i = filtro.get('fecha_i')
        fecha_f = filtro.get('fecha_f')
        paginas_i = filtro.get('paginas_i')
        paginas_f = filtro.get('paginas_f')
        
        q_categoria = []
        q_autores = []
        libros = []
        libros_unicos = []
        if categorias:
            q_categoria = CategoriaLibro.objects.filter(categoria__categoria__in=categorias)
            
        if autores:
            q_autores = AutorLibro.objects.filter(autor__nombre__in=autores)
        
        [ libros.append(x.libro.pk) for x in q_categoria ]
        [ libros.append(x.libro.pk) for x in q_autores ]
        [ libros_unicos.append(x) for x in libros if not x in libros_unicos ]
        
        q_fecha = ~Q()
        if fecha_i and fecha_f:
            q_fecha = Q(fecha_publicacion__range=[fecha_i, fecha_f])
            
        q_pagina = ~Q()
        if paginas_i and paginas_f:
            q_pagina = Q(cantidad_paginas__gte=paginas_i, cantidad_paginas__lte=paginas_f)
        
        q_libros = ~Q()
        if libros_unicos:
            q_libros = Q(pk__in=libros_unicos)
            
        if pages:
            return Libro.objects.filter( q_libros & q_pagina & q_fecha )[0 if pages == 1 else 9*(pages-1) : 9*pages]
        else:
            return Libro.objects.filter( q_libros & q_pagina & q_fecha )
        
class RankingLibroViewSet(viewsets.ModelViewSet):
    queryset = RankingLibro.objects.all()
    serializer_class = RankingLibroSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return RankingLibro.objects.filter(user=self.request.user)