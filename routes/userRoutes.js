let express = require('express');
let userController = require('../controllers/userController');
let multer = require('multer');
let path = require('path');
let router = express.Router();
const userLog =  require('../middlewares/userLog');

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

/**********LOGIN***********/ 
router.get('/login', userLog.guest ,userController.getLogin);
router.post('/login', userController.login)
/**********RECUPERAR CONTRASEÑA***********/ 
router.get('/password', userController.password);
/**********FORMULARIO DE REGISTRO***********/ 
router.get('/register', userController.getRegister);
router.post('/register', upload.single("image"),  userController.register );
/**********PERFIL DEL ADMINISTRADOR***********/ 
router.get('/admin', userController.admin);
/**********PERFIL DEL USUARIO***********/ 
router.get('/perfil', userController.user);
/********** SALIR ***********/ 
router.get('/logout', userController.logout);

module.exports = router; 