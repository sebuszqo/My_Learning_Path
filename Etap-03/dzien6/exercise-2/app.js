const express = require('express');
const {join} = require("path");
const {calcRouter} = require("./routes/calc");

console.log('Running my app');

const app = express();

app.use(express.static(join(__dirname, "public")));
app.use(express.json());
app.use('/calc', calcRouter)

app.listen(3000, 'localhost');
