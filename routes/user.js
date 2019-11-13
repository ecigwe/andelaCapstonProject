/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/auth/create-user', userCtrl.createuser);
router.post('/auth/signin', userCtrl.signin);

module.exports = router;
