const ProductsServices = require("../services/products.service");

const getAllProducts = async (req, res, next) => {
    try {
        const products = await ProductsServices.getAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const newProduct = req.body;
        console.log(userId, newProduct);
        const product = await ProductsServices.create(userId, newProduct);
        res.status(201).json(product)
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.body;
        const product = await ProductsServices.getOne(id);
        const sellerId = product.userId;
        if (userId !== sellerId) {
            next({
                status: 403,
                message: "You can't delete this item",
                messageName: "Not your product"
            })
        }
        await ProductsServices.delete(id)
        res.status(204).send();
    } catch (error) {
        next(error)
    }
}

const updateItem = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const infoToUpdate = req.body;
        const product = await ProductsServices.getOne(id);
        const sellerId = product.userId;
        if (userId !== sellerId) {
            next({
                status: 403,
                message: "You can't update this item",
                messageName: "Not your product"
            })
        };
        await ProductsServices.update(id, infoToUpdate);
        res.status(204).send();
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateItem
};