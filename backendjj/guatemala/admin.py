from django.contrib import admin
from guatemala.models import Municipio, MunicipioAdmin, Departamento, DepartamentoAdmin

admin.site.register(Municipio, MunicipioAdmin)
admin.site.register(Departamento, DepartamentoAdmin)