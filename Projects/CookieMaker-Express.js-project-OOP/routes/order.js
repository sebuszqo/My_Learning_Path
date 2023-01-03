const express = require('express');
const {getCookieSettings} = require("../util/get-cookie-settings");


class OrderRouter {
    constructor() {
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/summary', this.summary);
        this.router.get('/thanks', this.thanks);
    }

    summary = (req, res) => {
        const {cookieBase, addons, allBases, allAddons, sum} = getCookieSettings(req)

        res.render('order/summary', {
            cookie: {
                base: `${cookieBase}`,
                addons: addons,
            },
            bases: allBases,
            addons: allAddons,
            sum: sum,
        })
    }

    thanks = (req, res) => {
        const {sum} = getCookieSettings(req)
        res.clearCookie('cookieBase')
        res.clearCookie('cookieAddons')
        res.render('order/thanks', {sum})
    }
}

const order = new OrderRouter();

module.exports = {
    OrderRouter,
};
