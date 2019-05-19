const express = require('express');
const router = express.Router({ mergeParams: true });
const authController = require('../controllers/auth.controller');

router.post('/sign-up', authController.signup);

router.post('/login', authController.login);

module.exports = router;
