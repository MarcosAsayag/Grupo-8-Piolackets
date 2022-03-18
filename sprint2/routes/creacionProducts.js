const express = require('express');
const crearProducControllers = require('../controllers/crearProducControllers');
const router = express.Router();

//Formulario de creación
router.get('/create', crearProducControllers.crear);
//Procesamiento de formulario
router.post('/create', crearProducControllers.almacenar)

//Formulario de creación 2
router.get('/create2', crearProducControllers.crearPagina2);
//Procesamiento de formulario 2
router.post('/create2', crearProducControllers.almacenar2);

//Edición de productos vista
router.get('/edition/:id', crearProducControllers.confirmacion);
//Procesamiento de edición de productos
router.get('/update/:id', crearProducControllers.edicion);

//Borrar un producto
router.delete('/delete/:id', productsController.destroy);


module.exports = router; 