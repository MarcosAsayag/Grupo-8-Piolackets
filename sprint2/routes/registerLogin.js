const express = require('express');
const userController = require ('../controllers/userController');
const router = express.Router();

//middlewares
const loginValidator = require('../middlewares/userLogin');

//Register Form
router.get('/register', userController.register);
router.post('/register', userController.store);

//Login Form
router.get('/login', userController.login);
router.post('/user/login', loginValidator,userController.loginUser);

//User Profile
router.get('/user/:id', userController.users);

module.exports = router;