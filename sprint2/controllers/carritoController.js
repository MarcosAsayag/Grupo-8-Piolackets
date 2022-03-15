const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const carritoController = {
    carrito1: (req, res) => {
        let carritoId = req.params.id;
        const detalleProducto = products.filter(element => element.id == carritoId);

        res.render('products/carrito1', { detalleProducto : detalleProducto });
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