const express = require('express');
let userController = require('../controllers/userController');

let router = express.Router();

/**********LOGIN***********/ 
router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin)
/**********RECUPERAR CONTRASEÑA***********/ 
router.get('/password', userController.password);
/**********FORMULARIO DE REGISTRO***********/ 
router.get('/register', userController.getRegister);

router.post('/register', userController.register);
/**********PERFIL DEL ADMINISTRADOR***********/ 
router.get('/admin', userController.admin);
/**********PERFIL DEL USUARIO***********/ 
router.get('/perfil', userController.user);


module.exports = router; 