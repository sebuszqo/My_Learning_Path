const express = require('express');

const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {
        const {numberA, numberB} = req.body;
        // console.log(numberA, numberB)
        // if (numberA % numberB === 0) {
        //     return res.json({answer: 'true'});
        // }
        // return res.json({answer: 'false'});
        // const divider = numberA % numberB === 0; // alternatywa
        // res.json({divider}); // alternatywa
        // res.json({ok: true}); // @TODO
        res.json({divider: numberA % numberB === 0})
    });

module.exports = {
    calcRouter,
}
