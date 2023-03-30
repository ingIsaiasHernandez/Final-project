const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Cart = db.define('carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        field: "total_price"
    }
}, {
    timestamps: false
});

module.exports = Cart;