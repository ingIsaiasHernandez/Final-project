const ordersServices = require("../services/orders.service");

const getOrders = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const result = await ordersServices.getAllOrders(userId);
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getOrders,
}