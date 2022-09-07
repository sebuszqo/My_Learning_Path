const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require('../data/cookies.-data')
const {handlebarsHelpers} = require("../handlebars-helpers");

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        const {cookieAddons} = req.cookies
        let addons
        if (!cookieAddons) {
            addons = []
        } else {
            addons = JSON.parse(cookieAddons)
        }
        const {cookieBase} = req.cookies;
        // if (cookieBase === undefined) {
        //     const sum = 0 + ['coconut', 'honey', 'sprinkles'].reduce((prev, curr) => {
        //         return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
        //     }, 0);
        //     // console.log(sum)
        // } else {
        //     const sum = handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), cookieBase)
        //         + ['coconut', 'honey', 'sprinkles'].reduce((prev, curr) => {
        //             // console.log(prev)
        //             return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
        //         }, 0);
        // }
        const sum = (cookieBase ? handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), cookieBase) : 0)
            + addons.reduce((prev, curr) => {
                // console.log(prev)
                return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
            }, 0);

        res.render('home/home', {
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
    homeRouter,
};
