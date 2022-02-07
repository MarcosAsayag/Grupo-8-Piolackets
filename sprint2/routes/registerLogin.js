const express = require('express');

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('registro')
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;