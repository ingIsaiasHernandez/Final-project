const Cart = require("./cart.model");
const Order = require("./order.model");
const Products = require("./product.models");
const ProductInCart = require("./productInCart.model");
const ProductInOrder = require("./productInOrder.model");
const Users = require("./user.model");

const initModels = () => {
    Cart.belongsTo(Users, { foreignKey: 'userId' });
    Users.hasOne(Cart, { foreignKey: 'userId' });

    Products.belongsTo(Users, { foreignKey: 'userId' });
    Users.hasMany(Products, { foreignKey: 'userId' });

    Order.belongsTo(Users, {foreignKey: "userId"});
    Users.hasMany(Order, {foreignKey: "userId"});

    Cart.belongsTo(ProductInCart, {foreignKey: "cartId"});
    ProductInCart.hasMany(Cart, {foreignKey: "cartId"});

    Products.belongsTo(ProductInCart, {foreignKey: "productId"});
    ProductInCart.hasMany(Products, {foreignKey: "productId"});

    Order.belongsTo(ProductInOrder, {foreignKey: "orderId"});
    ProductInOrder.hasMany(Order, {foreignKey: "orderId"});

    Products.belongsTo(ProductInOrder, {foreignKey: "productId"});
    ProductInOrder.hasMany(Products, {foreignKey: "productId"});
}

module.exports = initModels;