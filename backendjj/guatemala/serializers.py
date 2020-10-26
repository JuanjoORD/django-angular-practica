from rest_framework import serializers
from .models import Municipio, Departamento, Relacion


class MunicipioSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Municipio
        fields = ('id', 'nombre', 'alcalde', 'descripcion', )

class DepartamentoSerializer(serializers.ModelSerializer): 
    municipios = MunicipioSerializer(many=True, read_only=True)
    class Meta:
        model = Departamento
        fields = ('id', 'nombre', 'municipios')

class RelacionSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Relacion
        fields = ('id', 'municipio', 'departamento')