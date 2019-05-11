const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/curr-converter.controller');

router.get('/', currencyController.getConversion);
1;
