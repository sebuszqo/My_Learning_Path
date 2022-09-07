const express = require('express')
const {readFile, writeFile} = require('fs').promises;
const app = express();

app.use(express.json());

app.post('/book', (req, res) => {
    console.log(req.body)
    res.send('')
});
app.listen(3000)
