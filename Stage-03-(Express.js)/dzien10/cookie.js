const express = require('express');

const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {
        const {name} = req.body;
        console.log(req.body)
        res.cookie(`name`, `${name}`, {
            expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
            secure: true,
            httpOnly: true,
        });
        res.render('cookie-set', {
            name,
        })
    })
    .get('/show', (req, res) => {
        const yourName = req.cookies.name;
        console.log(yourName)
        //typeof undefined is boolean false
        if (!yourName) {
            res.redirect('/');
            res.end()
        } else {
            res.send(``);
        }
    })
    .get('/clear', async (req, res) => {
        res.clearCookie('name');
        res.send('Wyczyszczono twoje ciastko');
    })
    .get('/set', (req, res) => {
        res.redirect('/');
        res.end()
    })


module.exports = {
    cookieRouter,
}
