const {body} = require('express-validator');

const registerValidator = [
    body('name')
        .isEmpty().withMessage('Debes añadir un nombre')
        .isLength({ min: 2 })('El nombre debe tener al menos 2 caracteres'),
    body('email')
        .isEmpty().withMessage('Debes añadir un email')
        .isEmail().withMessage('El email no es válido')
        .bail(),
        //database check needed
    body('password')
        .isEmpty().withMessage('Debes añadir una contraseña')
        .bail()
        .isLength({ min: 8 })('La contraseña debe tener al menos 8 caracteres'),
        //database check needed
        //(Opcional) → Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial.
    
    //body('image')

];

method.export = registerValidator;