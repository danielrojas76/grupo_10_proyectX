const express = require('express');
let userController = require('../controllers/userController');

let router = express.Router();

router.get('/login', userController.login)
router.get('/password', userController.password)
router.get('/register', userController.register)
router.get('/administrador', userController.administrador)
router.get('/admin', userController.admin)

router.get('/stock', userController.stock)

module.exports = router; 