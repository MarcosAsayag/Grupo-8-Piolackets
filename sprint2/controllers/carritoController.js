const path = require('path');

const carritoController = {
    carrito1: (req, res) => {
        res.render(path.join(__dirname,'../views/products/carrito1.ejs'))
    },

    carrito2: (req, res) => {
        res.render(path.join(__dirname,'../views/products/carrito2.ejs'))
    },

    carrito3: (req, res) => {
        res.render(path.join(__dirname,'../views/products/carrito3.ejs'))
    },

    carrito4: (req, res) => {
        res.render(path.join(__dirname,'../views/products/carrito4.ejs'))
    }
};

module.exports = carritoController;