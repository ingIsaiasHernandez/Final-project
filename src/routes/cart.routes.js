const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const { addToCart } = require('../controllers/cart.controller');
const router = Router();

router.post("/cart", authenticate, addToCart)

module.exports = router;