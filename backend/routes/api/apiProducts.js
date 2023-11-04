const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController')

router.get('/', apiProductsController.products)
router.get('/:id', apiProductsController.productsDetail)

module.exports = router; 

