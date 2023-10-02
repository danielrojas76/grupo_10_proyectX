const express = require('express');
const usersControllers = require('../controllers/usersControllers')

const router = express.Router();

router.get('/', usersControllers.getAll);

router.get('/:id/details', usersControllers.getById);

module.exports = router;
