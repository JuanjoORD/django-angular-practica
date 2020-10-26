from django.urls import path
from .views import (MunicipioListView, MunicipioCreateView, MunicipioRetrieveView, MunicipioUpdateView, 
                    DepartamentoListView, DepartamentoCreateView, DepartamentoRetrieveView, DepartamentoUpdateView,
                    RelacionListView, RelacionCreateView, RelacionRetrieveView, RelacionUpdateView)

urlpatterns = [
    path('municipios/', MunicipioListView.as_view(), name='municipios'),
    path('municipios/create/', MunicipioCreateView.as_view(), name='municipio_c'),
    path('municipios/<int:id>/', MunicipioRetrieveView.as_view(), name='municipio_g'),
    path('municipios/<int:id>/update/', MunicipioUpdateView.as_view(), name='municipio_u'),
    path('departamentos/', DepartamentoListView.as_view(), name='departamentos'),
    path('departamentos/create/', DepartamentoCreateView.as_view(), name='departamentos_c'),
    path('departamentos/<int:id>/', DepartamentoRetrieveView.as_view(), name='departamentos_g'),
    path('departamentos/<int:id>/update/', DepartamentoUpdateView.as_view(), name='departamentos_u'),
    path('relacion/', RelacionListView.as_view(), name='relacion'),
    path('relacion/create/', RelacionCreateView.as_view(), name='relacion_c'),
    path('relacion/<int:id>/', RelacionRetrieveView.as_view(), name='relacion_g'),
    path('relacion/<int:id>/update/', RelacionUpdateView.as_view(), name='relacion_u'),
]