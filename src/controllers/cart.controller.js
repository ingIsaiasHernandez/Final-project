const cartServices = require("../services/cart.services");
const ProductsServices = require("../services/products.service");

const addToCart = async (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.user.id;
        const cart = await cartServices.getCart(userId);
        const cartId = cart.id;
        const product = await ProductsServices.getOne(productId);
        if (!product) {
            next({
                status: 400,
                message: "Product doesn't exist",
                messageName: "roduct invalid"
            })
        }
        if (quantity > product.avaliableQty) {
            next({
                status: 400,
                message: "Quantity selected is greater than quantity avaliable",
                messageName: "Over quantity"
            })
        }
        const price = Number(quantity * product.price);
        await cartServices.add({ cartId, productId, quantity, price });
        await cartServices.sumPrice(Number(cartId), price);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

const getCartProducts = async (req, res, next) => {
    try {
        const { id } = req.user;
        const cart = await cartServices.getCart(id);
        const cartId = cart.id;
        const productsInCart = await cartServices.getProducts(cartId)
        res.status(200).json(productsInCart);
    } catch (error) {
        next(error)
    }
}

const purchaseCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const status = req.body
        const cart = await cartServices.getCart(userId);
        const cartId = cart.id;
        const result = await cartServices.buy(cartId, status);
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addToCart,
    getCartProducts,
    purchaseCart
}