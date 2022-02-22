const path = require('path');

const carritoController = {
    carrito1: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/products/carrito1.ejs'))
    },

    carrito2: (req, res) => {
        res.render('Carrito2')
    },

    carrito3: (req, res) => {
        res.render('Carrito3')
    },

    carrito4: (req, res) => {
        res.render('Carrito4')
    }
};

module.exports = carritoController;