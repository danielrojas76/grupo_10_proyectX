const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const userLog =  require('../middlewares/userLog');
const authMiddleware = require('../middlewares/authMiddleware')


/**********multer configuration***********/ 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let pathArchives = path.join(__dirname, '../public/images/users');
        callback(null, pathArchives);
    },
    filename: (req, file, callback) => {
        let nameOfFile = 'img-' + Date.now() + path.extname(file.originalname);
        callback(null, nameOfFile);
    }
})


let upload = multer({storage})

/**********validation require***********/ 

const {validationFormRegister} = require('../utils/validations')
const {validationLogin} = require('../utils/validations')

/**********LOGIN***********/ 
router.get('/login', userLog.guest ,userController.getLogin);
router.post('/login', [validationLogin], userController.login), 
/**********RECUPERAR CONTRASEÑA***********/ 
router.get('/password', userController.password);
/**********FORMULARIO DE REGISTRO***********/ 
router.get('/register', userController.getRegister);
router.post('/register', [upload.single("img"), validationFormRegister], userController.register );
/**********PERFIL DEL ADMINISTRADOR***********/ 
router.get('/admin', userController.admin);
/**********PERFIL DEL USUARIO***********/ 
router.get('/profile', userController.user);
/********** SALIR ***********/ 
router.get('/logout', userController.logout);
/********** EDITAR USUARIO ***********/ 
router.get("/:id/edit", userController.userEdit)
router.put("/:id/edit", upload.single("img"), userController.userUpdate)
/********** LISTA DE ORDENES ***********/ 
router.get('/order',authMiddleware, userController.orderList);

module.exports = router; 