/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const adduserRouter = require('./routes/user');
const addgifRouter = require('./routes/gif');

app.use('/', adduserRouter);
app.use('/', addgifRouter);

module.exports = app;
