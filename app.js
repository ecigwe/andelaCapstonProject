/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');
const table = require('./models/table');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const adduserRouter = require('./routes/user');
const addgifRouter = require('./routes/gif');
const addArticleRouter = require('./routes/articles');

table.createEmployeeTable();

table.createGifTable();

table.createArticlesTable();

table.createGifCommentTable();

table.createArticleCommentTable();
table.disconnect();

app.use('/', adduserRouter);
app.use('/', addgifRouter);
app.use('/', addArticleRouter);

module.exports = app;
