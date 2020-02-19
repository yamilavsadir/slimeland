// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* GET - products page. */
router.get('/', productsController.root);

module.exports = router;