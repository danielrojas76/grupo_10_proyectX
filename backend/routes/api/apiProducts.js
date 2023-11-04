const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController')

router.get('/api/products', apiProductsController.count)
router.get('/api/products/in-sale', apiProductsController.inSale)
router.get('/api/products/recomended', apiProductsController.recomended)
module.exports = router; 

