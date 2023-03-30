const UserServices = require("../services/user.service");
const transporter = require("../utils/mailer");
const AuthServices = require('../services/auth.services');
require('dotenv').config()

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser)
        res.status(201).json(result);
        const { id, email, username } = result;
        const token = await AuthServices.genToken({ id, email, username })
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: result.email,
            subject: "Verifica tu correo electronico",
            html: `
                <p> Hola ${result.username} Benvenido a mi ecommerce </p>
                <p> Es necesario que verifiques tu correo </p>
                <a href="https://localhost:5173/verify?token=${token}" target="_blank"> Validar correo </a>
            `
        })
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedInfo = req.body;
        await UserServices.update(id, updatedInfo);
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    updateUser
}