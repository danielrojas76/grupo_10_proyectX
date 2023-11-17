const express = require('express');
const mainController = require('../controllers/mainController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();


router.get('/', mainController.home);
router.get("/order/:id", authMiddleware, mainController.order);

module.exports = router;