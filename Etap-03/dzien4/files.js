const express = require('express');
const {join} = require('path')


const app = express();

app.get('/', (req, res) => {
    res.sendFile('cos.png', { // it will show the image
        root: join(__dirname, 'files'), // very important security --> secure path
        // lastModified:  // when we modified file last time (important for browser)
        headers: {
            'X-Best-JS-Information': 'My head',  // optional header
        },

    });
    res.attachment('cos.png', { // we send some data but as attachment, won't show it
        root: join(__dirname, 'files'),
    });


});

app.listen(3000);
