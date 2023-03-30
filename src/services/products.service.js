const Products = require("../models/product.models");

class ProductsServices {

    static async create(newProduct){
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductsServices;