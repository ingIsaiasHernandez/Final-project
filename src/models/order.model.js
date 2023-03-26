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
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Order;