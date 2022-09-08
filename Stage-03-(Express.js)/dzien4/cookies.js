const express = require('express');


const app = express();

app.get('/', (req, res) => {
    resdzi
        .cookie('cookie', 'very delicious')
        .send('hello, world!')
    console.log(res.headersSent); // --> all headers were send (True/False)

});

app.listen(3000);
