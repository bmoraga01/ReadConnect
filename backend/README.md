
# Back-End

El backend fue desarrollado con Django para poder ejecutarlo debe seguir los siguientes pasos:

# Instalación

Primero debe de crear un entorno vitrual dentro esta carpeta:

```bash
python -m venv ENV

```

El directorio deberia verse de la siguiente forma:

```
├── backend
├── biblioteca
├── carga_libros
├── core
...
├── ENV
...
```

Luego instalar todos las librerias del archivo requirements.txt

```bash
pip install -r requirements.txt

```

Una vez instaladas las librerias puede correr el backend:

```bash
python manage.py runserver

# o

python manage.py runserver_plus

```

# Configuración

Si desea que el sistema envie correos debe de configurar uno creando un [clave de aplicación google](https://support.google.com/accounts/answer/185833?hl=es-419).

Una vez generada la clave debe ingresar al archivo settings.py cambiar la variable DEBUG a False e ingresar su correo y clave donde corresponde

```python

DEBUG = False

...

if DEBUG:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
else:
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_USE_TLS = True
    EMAIL_PORT = 587
    EMAIL_HOST_USER = 'email_address'
    EMAIL_HOST_PASSWORD = 'email_password'

```


## API Reference

Para el sistema de autenticacion se utilizó la libreria [DJOSER](https://djoser.readthedocs.io/en/latest/index.html), donde se utilizaron los [Base Endpoints](https://djoser.readthedocs.io/en/latest/base_endpoints.html) y [JWT Endpoints](https://djoser.readthedocs.io/en/latest/jwt_endpoints.html)

A continuación los demas endpoints

#### Obtener todos los libros

```http
  GET /api/v1/libros
```

#### Obtener 1 libro

```http
  GET /api/v1/libros/${id}
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Requerido**. Id del libro |

#### Crear Reseña

```http
  GET /api/v1/ranking-libro/
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `libro`      | `int` | **Requerido**. Id del libro |
| `user`      | `int` | **Requerido**. Id del usuario |
| `ranking`      | `int` | **Requerido**. Numero de estrellas: 1 al 5 |
| `comentario`      | `string` | **Requerido**. Reseña del libro |

Takes two numbers and returns the sum.

### Obtener Perfil

```http
  GET /api/v1/perfil/
```

### Editar Perfil

```http
  PUT /api/v1/perfil/
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`      | `string` | **Requerido**. Nombre |
| `last_name`      | `string` | **Requerido**. Apellido |
| `image`      | `file` | **Requerido**. Imagen de perfil |


