/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const gifCtrl = require('../controllers/gif');

router.post('/gif', gifCtrl.creategif);
router.delete('/gifs/:gifId', gifCtrl.deletegif);

module.exports = router;
