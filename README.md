# Proyecto - Final

Objetivo general: Aplicar todos los conocimientos vistos en clase para levantar esta API desde 0, mas consideraciones de seguridad y para lanzar a producción en Railway / render. El proyecto debe cumplir con los siguientes puntos:

- Conectarse a una base de datos
- Se deben crear los siguientes modelos:
    - Car (id, userId, totalPrice)
    - Order (id, totalPrice, userId, status) // si completada pendiente
    - Product (id, name, description, price, availableQty, status, userId, productImage)
    - ProductInCart (id, carId, productId, quantity, price, status)
    - ProductInOrder (id, orderId, productId, quantity, price, status)
    - User (id, username, email, password, avatar)
- Establecer las siguientes relaciones:
    - Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
    - Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
    - Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
- Las funciones de los modelos ProductInCart y ProductInOrder, son para ser tablas intermediaras, para que se almacenen la información de los productos y de las ordenes y los carritos
    - Un ProductInCart puede tener uno o muchos producto y pertenece a un carrito
    - Un carrito tiene muchos ProductInCart
    - Una orden tiene muchos ProductInOrder
    - Un ProductInOrder tiene uno o muchos producto y pertenece a una orden
- Debe contener los siguientes puntos:
    - Crear usuarios y encriptar sus contraseñas con Bcrypt
    - Iniciar sesión y generar JWT
    - Editar un usuario ( username y avatar )
    - Crear la validaciones pertinentes para cada endpoint ( express validator)
    - Obtener todos los productos que su cantidad sea mayor que 0, debe incluir el nombre del usuario quien esta vendiendo el producto
    - Crear un nuevo producto, incluyendo una imagen
    - Poder editar la descripción de un producto
    - Agregar un producto al carrito
    - Mostrar todos los productos que el usuario tiene hasta el momento en su carrito
    - Realizar una compra, todos los productos en el carrito se marcan como comprados y el carrito cambia a status ‘purchased’
    - Ver todas las ordenes del usuario
    - Mandar un correo cuando un usuario crea una cuenta y cuando realiza una compra
    - // no hay verificacion de email
- Tu api debe tener una página de documentación con los endpoints que usas y que se pueda probar, incluyendo los campos requeridos para las peticiones y una sección para incluir el token de autenticación si es necesario. ( swwager)
- Enviar en class center link del repositorio y enlace de tu api desplegada (railway, render)


//Endpoints faltantes
- Debe contener los siguientes puntos:
    - Crear la validaciones pertinentes para cada endpoint ( express validator)
- Tu api debe tener una página de documentación con los endpoints que usas y que se pueda probar, incluyendo los campos requeridos para las peticiones y una sección para incluir el token de autenticación si es necesario. ( swwager)
- Enviar en class center link del repositorio y enlace de tu api desplegada (railway, render)