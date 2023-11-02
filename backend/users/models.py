from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from .models_states import *

# creacion de usuarios y superusuarios
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("User must have an email address")
        
        email = self.normalize_email(email)
        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email,  password=None, **kwargs):
        kwargs.setdefault('is_active', True)
        kwargs.setdefault('is_staff', True)
        kwargs.setdefault('is_superuser', True)
        if kwargs.get('is_active') is not True:
            raise ValueError('Superuser must be active')
        if kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must be staff')
        if kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')
        return self.create_user(email, password, **kwargs)
    
# Modelo de User Personalizado

def get_dir_image(instance, filename):
    return 'users/{0}/{1}'.format(instance.pk, filename)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=250, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    image = models.ImageField(upload_to=get_dir_image, blank=True, null=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    
    libros_favoritos = models.ManyToManyField('biblioteca.Libro', through='users.LibrosFavoritos')
    
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return f"{self.first_name}{self.last_name}"

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email
    
class LibrosFavoritos(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    libro = models.ForeignKey('biblioteca.Libro', on_delete=models.CASCADE)
    estado = models.CharField(max_length=1, choices=ESTADO_LIBROS_FAVORITOS, default='1')
    
    class Meta:
        verbose_name = 'Libro Favorito de Usuario'
        verbose_name_plural = 'Libros Favoritos de Usuarios'
        
    def __str__(self):
        return 'Libro %s favorito de Usuario %s'%(self.libro, self.user.get_full_name())