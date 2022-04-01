const express = require('express');
const loginController = require ('../controllers/loginController');
const registerController = require ('../controllers/registerController');
const userController = require ('../controllers/userController');
const router = express.Router();

router.get('/register', registerController.register);

router.get('/login', loginController.login);

router.get('/user', userController.users);

module.exports = router;