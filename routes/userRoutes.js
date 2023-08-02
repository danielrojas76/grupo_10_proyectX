const express = require('express');
let userController = require('../controllers/userController');
let router = express.Router();



router.get('/register', userController.register)

router.get('/login', userController.login)

router.get('/password', userController.password)


router.get('/administrador', userController.administrador)

router.get('/stock', userController.stock)




module.exports = router; 