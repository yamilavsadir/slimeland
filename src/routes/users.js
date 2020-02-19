// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/* GET - users page. */
router.get('/', usersController.root);

module.exports = router;
