const {body} = require('express-validator');

const loginValidator = [
    body('email')
        .isEmpty().withMessage('Debes completar el campo de email')
        .isEmail().withMessage('El email no es válido')
        .bail(),
        //database check needed
    body('password')
        .isEmpty().withMessage('Debes completar el campo de password')
        .bail()
        //database check needed
];

method.export = loginValidator;