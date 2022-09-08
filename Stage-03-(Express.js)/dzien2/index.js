const express = require('express');


const app = express();

const whiteListIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1']


app.get('/how', (req) => {
    // if (whiteListIps.includes(req.ip)) {
    //     console.log("Hello")
    // } else {
    //     console.log("Sorry, cannot tell you anything")
    // }
    // console.log(req.ip);
    // console.log(req.hostname);
    // console.log(req.method);
    // const {url, originalUrl, path} = req;
    // console.log({url, originalUrl, path});
    // if (req.protocol === 'http') {
    //     console.log('safe');
    // }
    // // another way --> req.secure === "True" when we are using https, or False when we are not
    // if (req.secure) {
    //     console.log('Safe');
    // }
    // console.log(req.query);
    console.log(req.get('user-agent'));
});

app.listen(3000);
