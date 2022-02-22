const express = require('express');
const carritoController = require('../controllers/carritoController');
const router = express.Router();

router.get('/crr1', carritoController.carrito1);

router.get('/crr2', carritoController.carrito2);

router.get('/crr3', carritoController.carrito3);

router.get('/crr4', carritoController.carrito4);

/*
router.get('/crr2', (req, res) => {
    res.render('Carrito2');
});

router.get('/crr3', (req, res) => {
    res.render('CarritoParte3');
});

router.get('/crr4', (req, res) => {
    res.render('CarritoParte4');
});
*/
module.exports = router;