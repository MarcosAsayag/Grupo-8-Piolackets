const express = require('express');
const carritoController = require('../controllers/carritoController');
const router = express.Router();

router.get('/product/:id', carritoController.carrito1);

router.get('/shop', carritoController.carrito2);

router.get('/shop1', carritoController.carrito3);

router.get('/shop2', carritoController.carrito4);

module.exports = router;