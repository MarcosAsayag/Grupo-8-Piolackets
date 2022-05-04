const express = require('express');
const productCreationController = require('../controllers/productCreationController');
const router = express.Router();

const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images/products');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
});

const upload = multer({storage: fileStorageEngine});

//Formulario de creación
router.get('/', productCreationController.create);
//Procesamiento de formulario
router.post('/', productCreationController.store)

//Edición de productos vista
router.get('/edition/:id', productCreationController.edit);
//Procesamiento de edición de productos
router.put('/update/:id', productCreationController.update);

//Borrar un producto
router.delete('/delete/:id', productCreationController.destroy);


module.exports = router; 