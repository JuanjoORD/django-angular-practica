from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView
from .models import Municipio, Departamento, Relacion
from .serializers import MunicipioSerializer, DepartamentoSerializer, RelacionSerializer


class MunicipioListView(ListAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = ()
    queryset = Municipio.objects.all()

class MunicipioCreateView(CreateAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = ()

class MunicipioRetrieveView(RetrieveAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = ()
    queryset = Municipio.objects.all()
    lookup_field = 'id'

class MunicipioUpdateView(UpdateAPIView):
    serializer_class = MunicipioSerializer
    permission_classes = ()
    queryset = Municipio.objects.all()
    lookup_field = 'id'

class DepartamentoListView(ListAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = ()
    queryset = Departamento.objects.all()

class DepartamentoCreateView(CreateAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = ()

class DepartamentoRetrieveView(RetrieveAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = ()
    queryset = Departamento.objects.all()
    lookup_field = 'id'

class DepartamentoUpdateView(UpdateAPIView):
    serializer_class = DepartamentoSerializer
    permission_classes = ()
    queryset = Departamento.objects.all()
    lookup_field = 'id'

class RelacionListView(ListAPIView):
    serializer_class = RelacionSerializer
    permission_classes = ()
    queryset = Relacion.objects.all()

class RelacionCreateView(CreateAPIView):
    serializer_class = RelacionSerializer
    permission_classes = ()

class RelacionRetrieveView(RetrieveAPIView):
    serializer_class = RelacionSerializer
    permission_classes = ()
    queryset = Relacion.objects.all()
    lookup_field = 'id'

class RelacionUpdateView(UpdateAPIView):
    serializer_class = RelacionSerializer
    permission_classes = ()
    queryset = Relacion.objects.all()
    lookup_field = 'id'