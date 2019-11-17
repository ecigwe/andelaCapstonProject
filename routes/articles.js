/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles');

router.post('/articles', articlesCtrl.createarticle);
router.put('/articles/:articleId', articlesCtrl.modifyarticle);
router.delete('/article/:articleId', articlesCtrl.deletearticle);

module.exports = router;
