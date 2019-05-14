const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require('../controllers/user.controller');

router.post('/create', userController.userCreate);

module.exports = router;
