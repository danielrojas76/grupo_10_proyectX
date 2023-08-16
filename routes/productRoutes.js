const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileUbication = path.join(__dirname, "../public/images/products");
        cb(null,fileUbication);

    },
    filename: (req, file, cb) => {
        let fileName = "img-" + Date.now() + path.extname(file.originalname);
        cb(null,fileName);        
    }
})

let upload = multer({storage})



router.get('/:id/detail', productController.detail);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit',upload.single("image"), productController.update); // no funciona

router.get('/create', productController.create);  
router.post('/create', upload.single("image"), productController.store);  


router.get('/stock', productController.stock)
router.get('/cart', productController.cart);

router.delete("/:id/delete", productController.destroy);

module.exports = router;