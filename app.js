const express = require('express');

const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(port, () => console.log(`Now listening on port ${port}...`));
