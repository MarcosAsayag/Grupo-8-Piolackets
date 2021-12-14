const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.send('hola');
})

app.listen(3030, () => {
    console.log('El servidor esta funcionando en el puerto 3030');
})
