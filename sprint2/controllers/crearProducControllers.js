const path = require('path');

const crearProducControllers = {
    crear: (req, res) => {
        res.render(path.join(__dirname,'../views/products/creacionDeProductos-1'))
    },
    crearPagina2: (req, res) => {
        res.render(path.join(__dirname,'../views/products/creacionDeProductos-2'))
    },
    confirmacion: (req, res) => {
        res.render(path.join(__dirname,'../views/products/confirmacionEntradas'))
    },
    edicion: (req, res) => {
        res.render(path.join(__dirname,'../views/products/ediciónDeProductos'))
    }
};

module.exports = crearProducControllers;