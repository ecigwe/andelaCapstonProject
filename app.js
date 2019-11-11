const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const addcontactRouter = require('./routes/contact');

//app.use('/', addcontactRouter);

app.get('/', (req, res) => {
	res.json({ hello: 'hello' });
});

module.exports = app;
