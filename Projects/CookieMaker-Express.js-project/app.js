const express = require('express');
const cookieParser = require('cookie-parser');
const {engine} = require("express-handlebars");
const {orderRouter} = require('.//routes/order');
const {configuratorRouter} = require('.//routes/configurator');
const {homeRouter} = require('.//routes/home');
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
