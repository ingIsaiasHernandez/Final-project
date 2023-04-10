const UserServices = require("../services/user.service");
const transporter = require("../utils/mailer");
const AuthServices = require('../services/auth.services');
const bcrypt = require('bcrypt');
const Cart = require("../models/cart.model");
require('dotenv').config()

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser)
        await Cart.create({ userId: result.id });
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: result.email,
            subject: "Bienvenido a libre mercadeo",
            html: `
                <p> ¡Hola ${result.username} Benvenido a libre mercadeo! </p>
            `
        });
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const tokenId = Number(req.user.id);
        const paramsId = Number(req.params.id);
        console.log(tokenId, paramsId);
        if (tokenId !== paramsId) {
            next ({
                status: 400,
                message: "Token id and params id are diferent",
                errorName: "Invalid id"
            })
        }
        const { id } = req.user;
        const updatedInfo = req.body;
        await UserServices.update(id, updatedInfo);
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserServices.getUser(email);
        if (!user) {
            return next({
                status: 400,
                message: "Invalid email",
                errorName: "User not found"
            })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return ({
                status: 400,
                message: "The password doesn't match with email user",
                messageName: "Invalid password"
            })
        };
        const { id , username } = user;
        const token = AuthServices.genToken({ id, username, email });
        res.json({
            id,
            username,
            email,
            token
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    updateUser,
    userLogin
}