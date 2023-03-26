const Cart = require("./cart.model");
const Order = require("./order.model");
const Products = require("./product.models");
const Users = require("./user.model");

const initModels = () => {
    Cart.belongsTo(Users, { foreignKey: 'userId' });
    Users.hasOne(Cart, { foreignKey: 'userId' });

    Products.belongsTo(Users, { foreignKey: 'userId' });
    Users.hasMany(Products, { foreignKey: 'userId' });

    Order.belongsTo(Users, {foreignKey: "userId"});
    Users.hasMany(Order, {foreignKey: "userId"});

    
}

module.exports = initModels;