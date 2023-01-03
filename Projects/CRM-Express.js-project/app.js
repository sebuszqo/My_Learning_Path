const express = require('express');
const {engine} = require("express-handlebars")
const methodOverride = require('method-override');
const {clientRouter} = require("./routes/client");
const {homeRouter} = require("./routes/home");
const {db} = require("./utils/db");
const {handleError} = require("./utils/errors");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'))
app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');


app.use('/clients', clientRouter)
app.use('/', homeRouter)
app.get('/test', (req, res) => {
    db.create({
        name: "Dominik",
        age: "mail@example.com"
    })
    // res.send(db.getOne('658b6bd4-a3f3-46ed-8a9e-120bd107e102').name)
})

app.use(handleError)

app.listen(3000, 'localhost', () => {
    console.log("Listening on http://localhost:3000")
});