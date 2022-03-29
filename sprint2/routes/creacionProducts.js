const express = require('express');
const crearProducControllers = require('../controllers/crearProducControllers');
const router = express.Router();

//Formulario de creación
router.get('/create', crearProducControllers.crear);
//Procesamiento de formulario
router.post('/create', crearProducControllers.almacenar)

//Edición de productos vista
router.get('/edition/:id', crearProducControllers.edit);
//Procesamiento de edición de productos
router.put('/update/:id', crearProducControllers.update);

//Borrar un producto
router.delete('/delete/:id', productsController.destroy);


module.exports = router; 