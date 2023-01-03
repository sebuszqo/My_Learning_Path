const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require('../data/cookies.-data')
const {handlebarsHelpers} = require("../handlebars-helpers");

class HomeRouter {

    constructor() {
        this.router = express.Router();
        this.setUpRoutes();

    }

    setUpRoutes() {
        this.router.get('/', this.home)
    }

    home = (req, res) => {
        const {cookieAddons} = req.cookies
        let addons
        if (!cookieAddons) {
            addons = []
        } else {
            addons = JSON.parse(cookieAddons)
        }
        const {cookieBase} = req.cookies;

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

    }
}

const home = new HomeRouter();

module.exports = {
    HomeRouter,
};


