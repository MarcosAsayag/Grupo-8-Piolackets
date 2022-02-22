const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const carritos = require('./routes/carritos');
const registerLogin = require('./routes/registerLogin');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/h', mainRoutes);

app.use('/carritos',carritos);

app.use('/regLog',registerLogin);

app.listen('3000', () => {
    console.log('Servidor escuchando en puerto 3000');
});