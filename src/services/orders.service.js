const Order = require('../models/order.model');
const productInOrder = require('../models/productInOrder.model');
class ordersServices {

    static async getAllOrders(userId) {
        try {
            const result = await Order.findAll({
                where: {
                    userId
                }, include:{
                    model: productInOrder,
                    attributes: {
                        exclude: ["id", "orderId", "status", "createdAt", "updatedAt"]
                    }
                }, attributes: {
                    exclude: ["status", "createdAt", "updatedAt"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ordersServices;