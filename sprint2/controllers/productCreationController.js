const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const crearProducControllers = {

    //Formulario de creación de producto
    create: (req, res) => {
        res.render('products/productsCreation');
    },

    //Almacenar los productos nuevos
    store: (req, res) => {

        let productoNuevo = {
            id: products[products.length-1].id + 1,

            ...req.body,
        }

        products.push(productoNuevo);

        let nuevoProducto = JSON.stringify(products, null, ' ');

        fs.writeFileSync(productsFilePath, nuevoProducto, 'utf-8');
        res.render('products/productsCreation');
    },

    edit: (req, res) => {
        const idProduct = req.params.id;
        const productEdit = products.filter(element => element.id == idProduct);
        res.render('products/productsEdition', { productEdit })
    },

    update: (req, res) => {
        const idProduct = req.params.id;
        const productUpdate = products.filter(element => element.id != idProduct);

        const productEdited = {
            id: parseInt(idProduct),
            ...req.body,
        }

        productUpdate.push(productEdited);
        let editedProducts = JSON.stringify(productUpdate, null, ' ');

        fs.writeFileSync(productsFilePath, editedProducts, 'utf-8');
        res.render('products/productsEdition', { products });
    },

    destroy: (req, res) => {
        const idProduct = req.params.id;
        const productDelete = products.filter(element => element.id != idProduct);
        let deletedProducts = JSON.stringify(productDelete, null, ' ');

        fs.writeFileSync(productsFilePath, deletedProducts, 'utf-8');
        res.render('carrito1', { products })
    }
};

module.exports = crearProducControllers;