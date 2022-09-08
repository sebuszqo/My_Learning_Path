const express = require('express');
const {voteRouter} = require('./routes/votes')

const app = express();

app.use(express.static('public'));

app.use('/vote', voteRouter);


app.listen(3000, 'localhost');
