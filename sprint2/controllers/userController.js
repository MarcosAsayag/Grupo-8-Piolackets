const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    //Users
    users: (req,res) => {
        let idUser = req.params.id;
        const userProfile = users.filter(element => element.id == idUser);
        res.render('users/user', {userProfile});
    },

    //Formulario de creación de Usuario(Registro)
    register: (req,res) => {
        res.render('users/register');
    },
    store: (req,res) => {
        let newUser = {
            id: users[users.length-1].id + 1,

            ...req.body,
    }
    
    users.push(newUser);

    let userJSON = JSON.stringify(products, null, ' ');

    fs.writeFileSync(usersFilePath, userJSON, 'utf-8');
    res.render('users/register');
    },

    //Formulario de Logeo
    login: (req,res) => {
        res.render('users/login');
    },

    loginUser: (req,res) => {
        //res.redirect('users/user');
        res.send('usuario loggeado');
    }
};


module.exports = userController;