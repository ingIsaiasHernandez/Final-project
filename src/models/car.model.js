const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
// const User = require('./user');

const Car = sequelize.define('Car', {
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Car.belongsTo(User, { foreignKey: 'userId' });
// User.hasOne(Car, { foreignKey: 'userId' });

module.exports = Car;
