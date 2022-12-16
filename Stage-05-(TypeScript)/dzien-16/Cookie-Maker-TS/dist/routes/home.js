import { Router } from "express";
const express = require('express');
export class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.urlPrefix = '/';
        this.router = Router();
        // @rest('get', '/')
        // @get('/')
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
        //    same thing:
        // this.router.get();
        // this.router['get']();
        //     this.router[apiOp.httpMethod](apiOp.path, (this as any[apiOp.propertyName]))
        // }
        this.router.get('/', this.home);
    }
}
//# sourceMappingURL=home.js.map