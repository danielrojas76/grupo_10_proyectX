const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productController = require('../controllers/productController');

// =========== img upload ================ //
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
// =========== img upload ================ //

router.get('/', productController.products);

router.get('/search', productController.search);

router.get('/:id/detail', productController.detail);

router.get('/:id/edit', productController.edit);
router.put('/:id/edit',upload.single("image"), productController.update); 

router.get('/create', productController.create);  
router.post('/create', upload.single("image"), productController.store);  


router.get('/stock', productController.stock)
router.get('/cart', productController.cart);

router.delete("/:id/delete", productController.destroy);

module.exports = router;