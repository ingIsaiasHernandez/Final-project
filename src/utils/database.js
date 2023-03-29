const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    database: "ecommerce_db",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    dialect: "postgres",
    logging: false
});

module.exports = db;