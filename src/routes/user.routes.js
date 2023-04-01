const {Router} = require('express');
const { createUser, updateUser } = require('../controllers/user.controller');
const { createUserValidator, updateUserValidator } = require('../validators/users.validators');
const router = Router();

router.post("/api/v1/users", createUserValidator, createUser);
router.put("/api/v1/users/:id", updateUserValidator, updateUser);

module.exports = router;


//*! - Establecer las siguientes relaciones:
//     - Un usuario puede tener muchos productos, y un producto le pertenece a un usuario
//     - Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario
//     - Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario
//     - más las que consideres necesarias

//*! - Las funciones de los modelos ProductInCart y ProductInOrder, son para ser tablas intermediaras,
//*! - para que se almacenen la información de los productos y de las ordenes y los carritos
//     - Un ProductInCart puede tener uno o muchos producto y pertenece a un carrito
//     - Un carrito tiene muchos ProductInCart
//     - Una orden tiene muchos ProductInOrder
//     - Un ProductInOrder tiene uno o muchos producto y pertenece a una orden