const express = require('express');
const mainRoutesController = require('../controllers/mainRoutesController');
const router = express.Router();

router.get('/h1', mainRoutesController.home);

router.get('/h2', mainRoutesController.home2);

module.exports = router;