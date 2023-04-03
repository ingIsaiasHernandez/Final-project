const Cart = require('../models/cart.model');
const Order = require('../models/order.model');
const ProductInCart = require('../models/productInCart.model');
const ProductInOrder = require('../models/productInOrder.model');

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
                    exclude: ["createdAt", "updatedAt"]
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

    static async createOrder(productsInCart, userId) {
        try {
            let totalPrice = 0;
            for (let i = 0; i < productsInCart.length; i++){
                totalPrice += productsInCart[i].price
            };
            const result = await Order.create({ totalPrice, userId });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async createProductsInOrder(order, productsInCart) {
        try {
            const products = [];
            for (let i = 0; i < productsInCart.length; i++) {
                products.push({ orderId: order.id, 
                    productId: productsInCart[i].productId, 
                    quantity: productsInCart[i].quantity, 
                    price: productsInCart[i].price })
            };
            const result = await ProductInOrder.bulkCreate(products);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async cleanCart(cartId) {
        try {
            const result = await ProductInCart.destroy({
                where: {
                    cartId
                }
            })
            await Cart.update({totalPrice: 0},{
                where: {
                    id: cartId
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = cartServices;