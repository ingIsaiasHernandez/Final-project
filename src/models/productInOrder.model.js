const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const ProductInOrder = db.define('products_in_order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id"
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id"
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = ProductInOrder;