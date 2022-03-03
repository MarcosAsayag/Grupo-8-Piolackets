const path = require('path');

const carritoController = {
    carrito1: (req, res) => {
        res.render(path.join(__dirname,'../views/Carrito1.ejs'))
    },

    carrito2: (req, res) => {
        res.render(path.join(__dirname,'../views/Carrito2.ejs'))
    },

    carrito3: (req, res) => {
        res.render(path.join(__dirname,'../views/Carrito3.ejs'))
    },

    carrito4: (req, res) => {
        res.render(path.join(__dirname,'../views/Carrito4.ejs'))
    }
};

module.exports = carritoController;