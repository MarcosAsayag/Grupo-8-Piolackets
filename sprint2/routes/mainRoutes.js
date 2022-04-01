const express = require('express');
const mainRoutesController = require('../controllers/mainRoutesController');
const router = express.Router();

router.get('/', mainRoutesController.home);

router.get('/products', mainRoutesController.products);

module.exports = router;