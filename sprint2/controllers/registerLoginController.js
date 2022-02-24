const path = require('path');

const registerLoginController = {
    register: (req,res) => {
        res.render(path.join(__dirname, '../views/users/registro.ejs'));
    },

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/Login.ejs'));
    },

    users: (req, res) => {
        res.render(path.join(__dirname, '../views/users/user.ejs'));
    }
}

module.exports = registerLoginController;