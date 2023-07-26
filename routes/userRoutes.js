const express = require('express');
let userController = require('../controllers/userController');
let router = express.Router();



router.get('/register', userController.register)

router.get('/login', userController.login)

router.get('/password', userController.password)

module.exports = router;