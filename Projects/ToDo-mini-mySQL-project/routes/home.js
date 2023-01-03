const express = require("express");
const homeRouter = express.Router();


homeRouter
    .get('/', (req, res) => {
        res.redirect('/todo')
    })

module.exports = {
    homeRouter,
}