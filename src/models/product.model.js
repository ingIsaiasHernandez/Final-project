const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
// const User = require('./user');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'available',
  },
  productImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Product.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Product, { foreignKey: 'userId' });

module.exports = Product;
