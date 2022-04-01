const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const carrito = require('./routes/carritos');
const registerLogin = require('./routes/registerLogin');
const creacionProducts = require('./routes/creacionProducts');
const methodOverride = require('method-override');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//El paquete para poder usar el put y delete
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', mainRoutes);

app.use('/',carrito);

app.use('/',registerLogin);

app.use('/create', creacionProducts);

app.listen('3000', () => {
    console.log('Servidor escuchando en puerto 3000');
});