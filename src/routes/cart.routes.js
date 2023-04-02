const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const { addToCart, getCartProducts, purchaseCart } = require('../controllers/cart.controller');
const router = Router();

router.route("/cart")
    .post(authenticate, addToCart)
    .get(authenticate, getCartProducts)
    .put(authenticate, purchaseCart)

module.exports = router;