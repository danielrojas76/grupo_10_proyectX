const express = require('express');
let productController = require('../controllers/productController');
let router = express.Router();

router.get('/detail', productController.detail)

router.get('/cart', productController.cart);

module.exports = router;