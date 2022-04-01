const path = require('path');

const mainRoutesController = {
    home: (req, res) => {
        res.render(path.join(__dirname,'../views/home1.ejs'))
    },

    products: (req, res) => {
        res.render(path.join(__dirname,'../views/home2.ejs'))
    }
};

module.exports = mainRoutesController;