const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../utils/database');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: "https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg"
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(user.password, salt);
                user.password = passwordHash; // actualizar la contraseña cifrada en el objeto usuario
            } catch (error) {
                throw error;
            }
        }
    },
    timestamps: false
});

module.exports = Users;
