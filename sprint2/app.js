const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));
/* app.get('/',(req,res)=>{
   res.send('hola');
})*/

app.listen(3030, () => {
    console.log('El servidor esta funcionando en el puerto 3030');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home1.html'));
});

app.get('/home2', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home2.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/Login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/registro.html'));
});

app.get('/Carrito1',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/Carrito1.html'));
});
app.get('/Carrito2',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/Carrito2.html'));
});
app.get('/Carrito3',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/Carrito3.html'));
});
app.get('/Carrito4',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/Carrito4.html'));
});