const ProductsServices = require("../services/products.service");

const getAllProducts = async(req, res) => {
    try {
        const products = await ProductsServices.getAll();
        res.json(products);
    } catch (error) {
        res.status(400).json(error);
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const product = await ProductsServices.create(newProduct);
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = req.body;
        const product = await ProductsServices.delete(deleteProduct);
        res.status(2044).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct
};