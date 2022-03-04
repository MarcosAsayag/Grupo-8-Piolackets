const express = require('express');
const crearProducControllers = require('../controllers/crearProducControllers');
const router = express.Router();

router.get('/creando', crearProducControllers.crear);

router.get('/creando1', crearProducControllers.crear1);

router.get('/creando2', crearProducControllers.crear2);

module.exports = router;