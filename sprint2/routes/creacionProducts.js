const express = require('express');
const crearProducControllers = require('../controllers/crearProducControllers');
const router = express.Router();

router.get('/create', crearProducControllers.crear);

router.get('/create2', crearProducControllers.crearPagina2);

router.get('/confirmation', crearProducControllers.confirmacion);

router.get('/edition', crearProducControllers.edicion);

module.exports = router;