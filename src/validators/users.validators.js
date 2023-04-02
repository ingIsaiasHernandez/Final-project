const { check, validationResult, param } = require('express-validator');
const validateResult = require('../utils/validate')

const createUserValidator = [
    check("username", "Error con el campo username")
        .exists().withMessage("El campo username es requerido")
        .notEmpty().withMessage("El campo username no puede estar vacio")
        .isString().withMessage("El campo username tiene que ser cadena de texto")
        .isLength({ min: 6, max: 30 }).withMessage("El campo username tiene que tener una longitud de entre 6 y 30 caracteres"),
    check("email", "Error en el correo electronico")
        .exists().withMessage("El campo email es requerido")
        .notEmpty().withMessage("El campo email no puede estar vacio")
        .isString().withMessage("El campo email tiene que ser cadena de texto")
        .isLength({ min: 7, max: 50 }).withMessage("El campo username tiene que tener una longitud de entre 7 y 50 caracteres")
        .isEmail().withMessage("Correo electronico invalido"),
    check("password", "Error con la contraseña")
        .exists().withMessage("El campo password es requerido")
        .notEmpty().withMessage("El campo password no puede estar vacio")
        .isString().withMessage("El campo passsword tiene que ser cadena de texto")
        .isLength({ min: 7 }).withMessage("El campo password tiene que tener una longitud minima de 7 caracteres"),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

const updateUserValidator = [
    param("id").isInt().withMessage("El id debe ser un número entero"),
    check("username")
        .isString()
        .withMessage("No se encuentra en nombre para el usuario")
        .notEmpty()
        .withMessage("El nombre no debe ser un string vacio"),
    check("avatar")
        .isString()
        .notEmpty(),
    check("email", "El correo no se puede cambiar").not().exists(),
    check("password", "El password no se puede cambiar").not().exists(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]
module.exports = {
    createUserValidator,
    updateUserValidator,
}