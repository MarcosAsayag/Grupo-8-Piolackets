const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const carritoRoutes = require('./routes/carritos');
const registerLoginRoutes = require('./routes/registerLogin');
const creacionProductsRoutes = require('./routes/productsCreation');
const methodOverride = require('method-override');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//El paquete para poder usar el put y delete
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', mainRoutes);

app.use('/',carritoRoutes);

app.use('/',registerLoginRoutes);

app.use('/create', creacionProductsRoutes);

app.listen('3000', () => {
    console.log('Servidor escuchando en puerto 3000');
});