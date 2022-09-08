const express = require('express');
const cookieParser = require('cookie-parser');
const {orderRouter} = require('../cookie-maker-project/routes/order');
const {configuratorRouter} = require('../cookie-maker-project/routes/configurator');
const {homeRouter} = require('../cookie-maker-project/routes/home');
const {engine} = require("express-handlebars");
// const path = require("path");
const {handlebarsHelpers} = require("./handlebars-helpers");

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');
// app.use("/images", express.static(path.join(__dirname, "/public/images")));
// console.log(__dirname)
// app.use('/styles', express.static(path.join(__dirname, 'public/styles')));

app.use('/', homeRouter);
app.use('/config', configuratorRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');
