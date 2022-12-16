import { Router } from "express";
const express = require('express');
export class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.urlPrefix = '/';
        this.router = Router();
        // @rest('get', '/')
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
        // dekoratory
        // const ar: RestDecoratorInfo[] = Reflect.get(this, '_restApiCalls') ?? [];
        //
        // for (const apiOp of ar) {
        //     this.router[apiOp.httpMethod](apiOp.path, (this as any[apiOp.propertyName]))
        // }
        this.router.get('/', this.home);
    }
}
//# sourceMappingURL=home.js.map