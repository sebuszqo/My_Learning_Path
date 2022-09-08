const express = require('express');
const cookieParser = require('cookie-parser');
const {cookieRouter} = require("../dzien10/cookie");
const {engine} = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


app.get('/hi', (req, res) => {
    res.render('home', {
        person: {
            firstName: 'testowa',
            lastName: 'xyz',
            age: '16',
        },
        dates: [],
    })
});

app.use(`/cookie`, cookieRouter);
app.listen(3001, 'localhost');
