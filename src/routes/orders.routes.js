const {Router} = require('express');
const router = Router();
const authenticate = require("../middlewares/auth.middleware");
const { getOrders } = require('../controllers/orders.controller');

router.get("/orders", authenticate, getOrders);

module.exports = router;