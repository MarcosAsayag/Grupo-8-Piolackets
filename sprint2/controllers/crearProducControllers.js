const path = require('path');

const crearProducControllers = {
    crear: (req, res) => {
        res.render(path.join(__dirname,'../views/crearEvento/creaciónDeEntradas'))
    },
    crear1: (req, res) => {
        res.render(path.join(__dirname,'../views/crearEvento/creaciónDeEntradas1'))
    },
    crear2: (req, res) => {
        res.render(path.join(__dirname,'../views/crearEvento/creaciónDeEntradas2'))
    }
};

module.exports = crearProducControllers;