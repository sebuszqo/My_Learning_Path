import {Response, Request, Router} from "express";
import {CookieMakerApp} from "../index";
import {MyRouter} from "../types/my-router";

const express = require('express');

export class HomeRouter implements MyRouter {
    public readonly urlPrefix = '/'
    public readonly router: Router = Router()

    constructor(private cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        this.router.get('/', this.home);
    }

    private home = (req: Request, res: Response): void => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

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
}

