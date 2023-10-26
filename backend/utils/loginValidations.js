
const path = require('path');
const { body } = require('express-validator');
module.exports = [
    check("email")
        .not()
        .isEmpty()
        .isEmail()
        .withMessage("Ingresar un email valido"),
    check("password")
        .isLength({ min: 8 })
        .withMessage("La contraseña deberia tener un minimo de 8 caracteres")
]