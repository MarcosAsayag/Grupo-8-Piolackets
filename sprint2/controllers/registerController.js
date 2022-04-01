const path = require('path');

const registerController = {
    register: (req,res) => {
        res.render(path.join(__dirname, '../views/users/registro.ejs'));
    }
};






module.exports = registerController;