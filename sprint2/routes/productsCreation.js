const express = require('express');
const crearProductControllers = require('../controllers/productCreationController');
const router = express.Router();

//Formulario de creación
router.get('/', crearProductControllers.crear);
//Procesamiento de formulario
router.post('/', crearProductControllers.almacenar)

//Edición de productos vista
router.get('/edition/:id', crearProductControllers.edit);
//Procesamiento de edición de productos
router.put('/update/:id', crearProductControllers.update);

//Borrar un producto
router.delete('/delete/:id', crearProductControllers.destroy);


module.exports = router; 