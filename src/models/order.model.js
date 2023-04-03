const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "total_price",
        defaultValue: 0
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Order;