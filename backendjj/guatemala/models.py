from django.db import models
from django.contrib import admin

class Municipio(models.Model):
    nombre  =   models.CharField(max_length=30)
    alcalde =   models.CharField(max_length=80)
    descripcion = models.TextField()    

    def __str__(self):
        return self.nombre


class Departamento(models.Model):
    nombre    = models.CharField(max_length=60)    
    municipios   = models.ManyToManyField(Municipio, through='Relacion')

    def __str__(self):
        return self.nombre


class Relacion (models.Model):
    municipio = models.ForeignKey(Municipio, on_delete=models.CASCADE)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)


class RelacionInLine(admin.TabularInline):
    model = Relacion
    extra = 1


class DepartamentoAdmin(admin.ModelAdmin):
    inlines = (RelacionInLine,)


class MunicipioAdmin (admin.ModelAdmin):
    inlines = (RelacionInLine,)
