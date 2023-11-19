const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const userLog =  require('../middlewares/userLog');

const productController = require('../controllers/productController');
/**********validation require***********/ 

const {validationProducts} = require('../utils/validations')
const {validationEdits} = require('../utils/validations')

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

router.get('/create', userLog.auth, productController.create);  
router.post('/create', [upload.single("img"), validationProducts], productController.store);

router.get('/:id/edit', userLog.auth, productController.edit);
router.put('/:id/edit',[upload.single("img"), validationEdits], productController.update); 

router.get('/stock', productController.stock)
router.get('/cart', userLog.authCart ,productController.cart);

router.delete("/:id/delete", userLog.auth, productController.destroy);

router.get("/user/profile", productController.stockVolver);

module.exports = router;