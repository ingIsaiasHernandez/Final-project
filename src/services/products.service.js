const { Op } = require("sequelize");
const Products = require("../models/product.models");
const Users = require("../models/user.model");

class ProductsServices {

  static async getAll() {
    try {
      const result = await Products.findAll({
        where: {
          avaliableQty: {
            [Op.gt]: 0
          }
        },
        attributes: { exclude: ["createdAt", "updatedAt", "userId"] },
        include: [{
          model: Users,
          attributes: ["username"]
        }]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(userId, newProduct) {
    try {
      const { name, description, price, avaliableQty, status, productImage } = newProduct
      const result = await Products.create({
        name,
        description,
        price,
        avaliableQty,
        status,
        userId,
        productImage
      });
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Products.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getOne(id) {
    try {
      const result = await Products.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, updatedInfo) {
    try {
      const result = await Products.update(updatedInfo, { where: { id }})
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;