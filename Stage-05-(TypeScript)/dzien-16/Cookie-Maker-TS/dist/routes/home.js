import { Router } from "express";
const express = require('express');
export class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.urlPrefix = '/';
        this.router = Router();
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
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/', this.home);
    }
}
//# sourceMappingURL=home.js.map