const express = require('express');
class HomeRouter {
    constructor(cmapp) {
        this.home = (req, res) => {
            const { sum, addons, base, allBases, allAddons } = this.cmapp.getCookieSettings(req);
            res.render('home/index', {
                cookie: {
                    base,
                    addons,
                },
                allBases,
                allAddons,
                sum,
            });
        };
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/', this.home);
    }
}
module.exports = {
    HomeRouter,
};
//# sourceMappingURL=home.js.map