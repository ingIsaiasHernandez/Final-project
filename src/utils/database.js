const { Sequelize } = require('sequelize');
const db = new Sequelize({
    database: "ecommerce_db",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "eminem09ful",
    dialect: "postgres",
    logging: false
});

module.exports = db;