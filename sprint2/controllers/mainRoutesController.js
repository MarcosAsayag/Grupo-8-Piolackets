const path = require('path');

const mainRoutesController = {
    home: (req, res) => {
        res.render(path.join(__dirname,'../views/home.ejs'))
    },

    products: (req, res) => {
        res.render(path.join(__dirname,'../views/products.ejs'))
    }
};

module.exports = mainRoutesController;