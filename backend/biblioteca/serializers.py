from rest_framework import serializers
from .models import *
from django.db.models import Sum, Avg


class RankingLibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = RankingLibro
        fields = ('__all__')

class AutorLibroSerializer(serializers.ModelSerializer):
    nombre = serializers.SerializerMethodField()
    class Meta:
        model = AutorLibro
        fields = ('__all__')
    
    def get_nombre(self, obj):
        return obj.autor.nombre
    
class CategoriaLibroSerializer(serializers.ModelSerializer):
    categoria = serializers.SerializerMethodField()
    class Meta:
        model = CategoriaLibro
        fields = ['categoria']
        
    def get_categoria(self, obj):
        return obj.categoria.categoria

class LibroSerializer(serializers.ModelSerializer):
    autores = serializers.SerializerMethodField()
    categorias = serializers.SerializerMethodField()
    rankings = serializers.SerializerMethodField()
    prom_ranking = serializers.SerializerMethodField()
    
    class Meta:
        model = Libro
        fields = ('__all__')
        read_only_fields = ['titulo', 'isbn', 'cantidad_paginas', 'fecha_publicacion', 'imagen', 'descripcion_corta', 'descripcion_larga', 'estado']
        
    def get_autores(self, obj):
        queryset = AutorLibro.objects.filter(libro=obj.pk)
        return [ AutorLibroSerializer(m).data for m in queryset ]
    
    def get_categorias(self, obj):
        queryset = CategoriaLibro.objects.filter(libro=obj.pk)
        return [ CategoriaLibroSerializer(m).data for m in queryset ]
    
    def get_rankings(self, obj):
        queryset = RankingLibro.objects.filter(libro=obj.pk)
        return [ RankingLibroSerializer(m).data for m in queryset ]
    
    def get_prom_ranking(self, obj):
        prom = RankingLibro.objects.filter(libro=obj.pk).aggregate(total=Sum('ranking'))['total'] or 0
        
        return int(prom)