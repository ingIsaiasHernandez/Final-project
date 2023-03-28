const Cart = require("./cart.model");
const Order = require("./order.model");
const Products = require("./product.models");
const ProductInCart = require("./productInCart.model");
const ProductInOrder = require("./productInOrder.model");
const Users = require("./user.model");

const initModels = () => {
    Users.belongsTo(Cart, { foreignKey: 'userId' });
    Cart.hasOne(Users, { foreignKey: 'userId' });

    Users.belongsTo(Products, { foreignKey: 'userId' });
    Products.hasMany(Users, { foreignKey: 'userId' });

    Order.belongsTo(Users, {foreignKey: "userId"});
    Users.hasMany(Order, {foreignKey: "userId"});

    ProductInCart.belongsTo(Cart, {foreignKey: "cartId"});
    Cart.hasMany(ProductInCart, {foreignKey: "cartId"});

    ProductInCart.belongsTo(Products, {foreignKey: "productId"});
    Products.hasMany(ProductInCart, {foreignKey: "productId"});

    ProductInOrder.belongsTo(Order, {foreignKey: "orderId"});
    Order.hasMany(ProductInOrder, {foreignKey: "orderId"});

    ProductInOrder.belongsTo(Products, {foreignKey: "productId"});
    Products.hasMany(ProductInOrder, {foreignKey: "productId"});
}

module.exports = initModels;