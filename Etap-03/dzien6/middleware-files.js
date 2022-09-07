const express = require('express')
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/book', (req, res) => {
    console.log(req.body)
    res.send('')
});
app.listen(3000)
