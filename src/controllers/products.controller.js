const ProductsServices = require("../services/products.service");

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsServices.create(newProduct);
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}