import * as express from "express";
import {static as expressStatic, urlencoded} from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {engine} from "express-handlebars";
import {homeRouter} from "./routers/home";
import {warriorRouter} from "./routers/warrior";
import {arenaRouter} from "./routers/arena";
import {hallOfFameRouter} from "./routers/hall-of-fame";
/**
 * Import to create a connection pool to database when we are starting an app
 */
import "./utils/db";
import {handleError} from "./utils/errors";

// creating an express app
const app = express();

// methodOverride to use with PATCH PUT etc.
app.use(methodOverride('_method'));

// I will use it cuz we will get our data through forms
app.use(urlencoded({
    extended: true,
}));

// I will be serving static data from dir named 'public'
// app.use(expressStatic("__dir"))
app.use(expressStatic("public"));

// layouts engine - I will use express handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers: ???,
}));

// setting my view engine to .hbs
app.set('view engine', '.hbs')

// using homeRouter
app.use('/', homeRouter);
// using warriorRouter
app.use('/warrior', warriorRouter)
// using arenaRouter
app.use('/arena', arenaRouter)
// using hallofFameRouter
app.use('/hall-of-fame', hallOfFameRouter)

//handling errors
app.use(handleError)


// app is listening on port 3000 - console log to click every time when I need it - I do not have to copy it ;)
app.listen(3000, 'localhost', () => {
    console.log("Listening on http://localhost:3000");
});



