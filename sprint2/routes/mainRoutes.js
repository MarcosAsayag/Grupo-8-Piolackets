const express = require('express');
const mainRoutesController = require('../controllers/mainRoutesController');
const router = express.Router();

router.get('/h1', mainRoutesController.home);

router.get('/products', mainRoutesController.home2);

module.exports = router;