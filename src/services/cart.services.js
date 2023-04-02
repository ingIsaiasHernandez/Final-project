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

    static async sumPrice(id, price) {
        try {
            const cart = await Cart.findByPk(id);
            const newPrice = Number(cart.totalPrice + price);
            const result = await Cart.update({ totalPrice: newPrice }, {
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getProducts(id) {
        try {
            const result = await ProductInCart.findAll({
                where: { cartId: id },
                attributes: {
                    exclude: ["id", "createdAt", "updatedAt"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async buy(cartId, status) {
        try {
            const result = await ProductInCart.update(status, {
                where: { cartId }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = cartServices;