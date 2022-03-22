const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const crearProducControllers = {

    //Formulario de creación de producto
    crear: (req, res) => {
        res.render('products/creacionDeProductos-1');
    },

    //Almacenar los productos nuevos
    almacenar: (req, res) => {

        let productoNuevo = {
            id: products[products.length-1].id + 1,

            ...req.body,
        }
        console.log(req.body);
        console.log(productoNuevo);

        products.push(productoNuevo);

        let nuevoProducto = JSON.stringify(products, null, ' ');

        fs.writeFileSync(productsFilePath, nuevoProducto, 'utf-8');
        res.render('products/creacionDeProductos-1');
    },
    
    crearPagina2: (req, res) => {

        let productoNuevo2 = {
            id: products[products.length-1].id + 1,

            ...req.body,
        }

        products.push(productoNuevo2);

        let nuevoProducto2 = JSON.stringify(products, null, ' ');

        fs.writeFileSync(productsFilePath, nuevoProducto2, 'utf-8');
        res.render('products/creacionDeProductos-2');

        res.render('products/creacionDeProductos-2');
    },

    almacenar2: (req, res) => {

        let productoNuevo2 = {
            id:products[products.length-1].id + 1,

            ...req.body,
        }

        products.push(productoNuevo2);

        let nuevoProducto2 = JSON.stringify(products, null, ' ');

        fs.writeFileSync(productsFilePath, nuevoProducto2, 'utf-8');
        res.render('products/creacionDeProductos-2');
    } ,

    confirmacion: (req, res) => {
        const idProduct = req.params.id;
        const productEdit = products.filter(element => element.id == idProduct);
        res.render('products/confirmacionEntradas', { productEdit })
    },

    edicion: (req, res) => {
        const idProduct = req.params.id;
        const productUpdate = products.filter(element => element.id != idProduct);

        const productEdited = {
            id: parseInt(idProduct),
            ...req.body,
        }

        productUpdate.push(productEdited);
        let editedProducts = JSON.stringiffy(productUpdate, null, ' ');

        fs.writeFileSync(productsFilePath, editedProducts, 'utf-8');
        res.render('products', { products });
    },

    /*destroy: (req, res) => {
        const idProduct = req.params.id;
        const productDelete = products.filter(element => element.id != idProduct);
        let deletedProducts = JSON.stringify(productDelete, null, ' ');

        fs.writeFileSync(productsFilePath, deletedProducts, 'utf-8');
        res.render('carrito1', { products })
    }*/
};

module.exports = crearProducControllers;