// const {pool} = require("./utils/db");
// const {TodoRecord} = require("./records/todo.record");
//
// (async () => {
//
//
//     // const foundTodo = await TodoRecord.find('04924246-c0a2-4cba-adf4-d3d1dbe4babb')
//     // if (!foundTodo) {
//     //     throw new Error('foundTodo is NULL')
//     // } else {
//     //     const res = await foundTodo.update('Alicja nie ma koniczka :(     ');
//     //     console.log(res)
//     // }
//     const newObj = new TodoRecord({
//         title: "ala ma kotak"
//     })
//     await newObj.insert()
//
//     // const res = await TodoRecord.findAll()
//     // console.log(res)
//     await pool.end()
//
// })();

const express = require('express');
require('express-async-errors');
const methodOverride = require('method-override');
const {engine} = require('express-handlebars');
const {todoRouter} = require("./routes/todo");
// const {handleError} = require("./utils/errors");
const {homeRouter} = require("./routes/home");


const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));
// app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
// app.use(handleError);


app.use('/', homeRouter);
app.use('/todo', todoRouter);

app.listen(3000, 'localhost');
