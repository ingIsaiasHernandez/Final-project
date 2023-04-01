const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware')
const { getAllProducts, createProduct, deleteProduct } = require('../controllers/products.controller');

const router = Router();

// obtiene todos los productos
router.get('/products', getAllProducts);

// añade producto
router.post("/products/",authenticate, createProduct);

// borra producto
router.delete('/products/:id', deleteProduct);

module.exports = router;
