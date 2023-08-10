const express = require('express');
let productController = require('../controllers/productController');
let router = express.Router();

router.get('/:id/detail', productController.detail);

router.get('/:id/edit', productController.edit);
/* router.put('/:id/edit', productController.detail); */ // no funciona

router.get('/create', productController.create);
/* router.post('/create', productController.detail);  */// no funciona

router.get('/stock', productController.stock)
router.get('/cart', productController.cart);

module.exports = router;