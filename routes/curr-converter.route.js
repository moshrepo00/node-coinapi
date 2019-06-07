const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/curr-converter.controller');
const { isLoggedIn } = require('../middleware/auth/is-auth');

router.get('/', isLoggedIn, currencyController.getConversion);

module.exports = router;
