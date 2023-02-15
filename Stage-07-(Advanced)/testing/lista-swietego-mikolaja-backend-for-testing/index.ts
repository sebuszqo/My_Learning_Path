import * as express from "express";
// globalne dołączenie plików
import 'express-async-errors';
import {handleError} from "./utils/errors";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers/child";
import {giftRouter} from "./routers/gift";
import './utils/db';

import * as cors from 'cors';

const app = express();

app.use(express.json()); // Content-type: application/json

app.use(cors({
    origin: "http://localhost:3000",
}));

app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});
