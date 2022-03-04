const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const carrito = require('./routes/carritos');
const registerLogin = require('./routes/registerLogin');
const creacionP = require('./routes/creacionP');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/h', mainRoutes);

app.use('/carritos',carrito);

app.use('/regLog',registerLogin);

app.use('/crear', creacionP);

app.listen('3000', () => {
    console.log('Servidor escuchando en puerto 3000');
});