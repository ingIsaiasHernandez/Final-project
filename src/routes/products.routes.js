const {Router} = require('express');
const { getAllProducts, createProduct, deleteProduct } = require('../controllers/products.controller');

const router = Router();

// obtiene todos los productos
router.get('/api/v1/products', getAllProducts);

// añade producto
router.post("/api/v1/products/:id", createProduct);

// borra producto
router.delete('/api/v1/products/:id', deleteProduct);

module.exports = router;
