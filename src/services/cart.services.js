const Cart = require('../models/cart.model');
const ProductInCart = require('../models/productInCart.model');

class cartServices {
    static async getCart(userId) {
        try {
            const result = await Cart.findOne({ where: { userId } })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async add(values) {
        try {
            const result = await ProductInCart.create(values)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = cartServices;