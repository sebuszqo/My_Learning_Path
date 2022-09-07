const express = require('express');

const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {
        const {name} = req.body;
        res.cookie(`name`, `${name}`, {
            expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
            secure: true,
            httpOnly: true,
        });
        res.send('Zapisano Imię');
    })
    .get('/show', (req, res) => {
        const yourName = req.cookies.name;
        console.log(yourName)
        //typeof undefined is boolen false
        if (!yourName) {
            res.redirect('/');
            res.end()
        } else {
            res.send(`Twoje zapisane ciastko z imieniem to: ${yourName}`);
        }
    })
    .get('/clear', async (req, res) => {
        res.clearCookie('name');
        res.send('Wyczyszczono twoje ciastko');

    });


module.exports = {
    cookieRouter,
}
