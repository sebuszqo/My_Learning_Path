const express = require('express');
const cookieParser = require('cookie-parser');
const {cookieRouter} = require("../exercise-3/routes/cookie");


const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}))
app.use(`/cookie`, cookieRouter);
app.listen(3000, 'localhost');
