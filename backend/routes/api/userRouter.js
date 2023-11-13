const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/userController')

router.get('/', usersController.users); // responde con el array de usuarios
router.get('/:id',usersController.usersDetails) // responde al id de usuario

module.exports = router;