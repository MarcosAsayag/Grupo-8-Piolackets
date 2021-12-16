const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.listen(3030, () => {
    console.log('El servidor esta funcionando en el puerto 3030');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home1.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home2.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/Login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/CarritoParte1.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/CarritoParte2.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/CarritoParte3.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/CarritoParte4.html'));
});