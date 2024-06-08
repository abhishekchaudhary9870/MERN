<<<<<<< HEAD
const express  = require('express')
const productController =require('../controllers/productsController.js')
const productRouter = express.Router();
productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProduct)
productRouter.route('/:id')
.put(productController.replaceProduct)
.delete(productController.deleteProduct)


module.exports = productRouter;


=======
const express  = require('express')
const productController =require('../controllers/productsController.js')
const productRouter = express.Router();
productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProduct)
productRouter.route('/:id')
.put(productController.replaceProduct)
.delete(productController.deleteProduct)


module.exports = productRouter;


>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
