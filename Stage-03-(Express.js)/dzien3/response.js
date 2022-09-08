const express = require('express');

const app = express();

app.get('/article/:articleName?/:id', (req, res) => {
    // res.send('hello!')
    // console.log(req.query)
    // console.log(req.params)
    res.send({
        id: req.params.id,
        content: "Lorem ipsum"
    });
    // res.json('hello')

});

app.listen(3000);
