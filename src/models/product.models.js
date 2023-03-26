const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avaliableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "avaliabe_quantity"
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    productImage: {
        type: DataTypes.STRING,
        field: "product_image",
        defaultValue: "https://www.idelcosa.com/img/default2.png"
    }    
});

module.exports = Products;