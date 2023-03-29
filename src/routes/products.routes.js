const {Router} = require('express');
const router = Router();

router.post('/api/v1/products', createProduct)