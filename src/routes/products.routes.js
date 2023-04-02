const {Router} = require('express');
const authenticate = require('../middlewares/auth.middleware')
const { getAllProducts, createProduct, deleteProduct, updateItem } = require('../controllers/products.controller');

const router = Router();

// obtiene todos los productos
router.get('/products', getAllProducts);

// añade producto
router.post("/products/",authenticate, createProduct);

// borra producto
router.delete('/products/', authenticate, deleteProduct);

router.put("/products/:id", authenticate, updateItem)

module.exports = router;
