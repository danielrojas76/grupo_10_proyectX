const express = require('express');
let productController = require('../controllers/productController');
let router = express.Router();

router.get('/detail', productController.detail)

module.exports = router;