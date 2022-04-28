//rutas accesibles con/sin login

//TODO LO SIGUIENTE VA EN EL CONTROLLER DE USER(userController)

const {validationResult} = require('express-validator');

const errors = validationResult(req);
if(!errors.isEmpty()){
    const mensajes = errors.errors.map(error => error.msg);
    res.render('user/login', {errores: mensajes});
}