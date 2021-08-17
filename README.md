
-**-----------Juan José Ordoñez-------------**

### TL;DR

Antes de inicar ver los pasos para configurar el proyecto inicial.

IMPORTANTE
```
Este proyecto es una práctica 
del Framework Django como backend (utilizando djangorestframework)
El cual es consumido por una aplicación Angular como frontend.
```

Paso 1: clonar el repo
```
git clone https://github.com/JuanjoORD/django-angular-practica.git
cd django-angular-practica
```

Paso 2: crear un ambiente virtual con Python 3
- **IMPORTANTE!** Antes de crear el ambiente virtual, 
estar seguro de tener Python 3 version 3.6 o superior.


```
python 3 -m venv ambiente
or
mkvirtualenv ambiente --python=/usr/bin/python3
or 
mkvirtualenv ambiente --python=/usr/bin/python3.x
```

Paso 3: instalar los requerimientos del backend

```
pip install -r requirements.txt
```

Paso 4: correr las migraciones

```
./manage.py migrate
si no, correr
python manage.py migrate
```

Paso 4: iniciar el servicio del backend

```
./manage.py runserver
si no, correr
python manage.py runserver
```

Paso 6: iniciar el frontend

```
cd frontendjj
npm i
npm start
```

Y listo, eso sería todo, ahora puedes ver el funcionamiento del proyecto y realizar tus pruebas o modificaciones.

Cabe mencionar que este proyecto solo contempla dos entidades de uno a muchos.
Para agregar más entidades hay que modificar las migraciones del backend y el consumo desde frontend.
