const {Router} = require("express");


const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.redirect('/child')
    })

module.exports = {
    homeRouter,
}