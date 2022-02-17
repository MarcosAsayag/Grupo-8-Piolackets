const express = require('express');

const router = express.Router();

router.get('/crr1', (req, res) => {
    res.render('Carrito1')
});

router.get('/crr2', (req, res) => {
    res.render('Carrito2');
});

router.get('/crr3', (req, res) => {
    res.render('CarritoParte3');
});

router.get('/crr4', (req, res) => {
    res.render('CarritoParte4');
});

module.exports = router;