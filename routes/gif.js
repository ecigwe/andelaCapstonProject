/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const gifCtrl = require('../controllers/gif');

router.post('/gif', gifCtrl.creategif);


module.exports = router;