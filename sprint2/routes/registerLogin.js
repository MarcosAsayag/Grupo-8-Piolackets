const express = require('express');
const registerLoginController = require ('../controllers/registerLoginController');
const router = express.Router();

router.get('/register', registerLoginController.register);

router.get('/login', registerLoginController.login);

router.get('/user', registerLoginController.users);

module.exports = router;