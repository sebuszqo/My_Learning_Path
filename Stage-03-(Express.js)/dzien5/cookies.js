const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res
        .cookie('cookie', 'very delicious', {
            path: '/',
            // expires: new Date(2022, 11, 31),
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
            httpOnly: true,
        })
        .send('hello, world!')
    console.log(res.headersSent); // --> all headers were send (True/False)

});

app.get('/logout', (req, res) => {
    res
        .clearCookie('cookie')
        .send('Logged out.');
})

app.listen(3000);
