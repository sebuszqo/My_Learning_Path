import * as express from "express";
// globalne dołączenie plików
import 'express-async-errors';
import * as methodOverride from "method-override";
import { engine } from "express-handlebars";
import { handleError } from "./utils/errors";
import { homeRouter } from "./routers/home";
import { childRouter } from "./routers/child";
import { giftRouter } from "./routers/gift";
import { handlebarsHelpers } from "./utils/handlebars-helpers";
import './utils/db';
const app = express();
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json()); // Content-type: application/json
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');
app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);
app.use(handleError);
app.listen(3000, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3000');
});
//# sourceMappingURL=index.js.map