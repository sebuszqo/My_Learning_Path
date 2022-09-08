const express = require('express');
const {handlebarsHelpers} = require("../handlebars-helpers");
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies.-data");


const orderRouter = express.Router();

orderRouter
    .get('/summary',(req,res)=>{
        const {cookieAddons, cookieBase} = req.cookies
        let addons
        if (!cookieAddons) {
            addons = []
        } else {
            addons = JSON.parse(cookieAddons)
        }
        const sum = (cookieBase ? handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), cookieBase) : 0)
            + addons.reduce((prev, curr) => {

                return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
            }, 0);

        res.render('order/summary', {
            cookie: {
                base: `${cookieBase}`,
                addons: addons,
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),
            sum: sum,
        })
    })

module.exports = {
    orderRouter,
};
