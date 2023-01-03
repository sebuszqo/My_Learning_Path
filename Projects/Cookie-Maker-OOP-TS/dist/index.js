import * as express from 'express';
import { static as expressStatic, json } from "express";
import * as cookieParser from 'cookie-parser';
import { engine } from "express-handlebars";
// import {HomeRouter} from "./routes/home";
import { ConfiguratorRouter } from "./routes/configurator";
// import {OrderRouter} from "./routes/order";
import { handlebarsHelpers } from "./utils/handlebars-helpers";
import { COOKIE_BASES, COOKIE_ADDONS } from "./data/cookies-data";
import { HomeRouter } from "./routes/home";
import { OrderRouter } from "./routes/order";
export class CookieMakerApp {
    constructor() {
        this.data = {
            COOKIE_BASES,
            COOKIE_ADDONS,
        };
        this.routers = [HomeRouter, ConfiguratorRouter, OrderRouter];
        this._configureApp();
        this._setRoutes();
        this._run();
    }
    _configureApp() {
        this.app = express();
        this.app.use(json());
        this.app.use(expressStatic('public'));
        this.app.use(cookieParser());
        this.app.engine('.hbs', engine({
            extname: '.hbs',
            helpers: handlebarsHelpers,
        }));
        this.app.set('view engine', '.hbs');
    }
    _setRoutes() {
        // better way to deal with express routers
        for (const router of this.routers) {
            const obj = new router(this);
            this.app.use(obj.urlPrefix, obj.router);
        }
        // this.app.use(HomeRouter.urlPrefix, new HomeRouter(this).router);
        // this.app.use(ConfiguratorRouter.urlPrefix, new ConfiguratorRouter(this).router);
        // this.app.use('/order', new OrderRouter(this).router);
    }
    _run() {
        this.app.listen(3000, '0.0.0.0', () => {
            console.log('Listening on http://localhost:3000');
        });
    }
    showErrorPage(res, description) {
        res.render('error', {
            description,
        });
    }
    getAddonsFromReq(req) {
        const { cookieAddons } = req.cookies;
        return cookieAddons ? JSON.parse(cookieAddons) : [];
    }
    getCookieSettings(req) {
        const { cookieBase: base } = req.cookies;
        const addons = this.getAddonsFromReq(req);
        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allAddons = Object.entries(this.data.COOKIE_ADDONS);
        const sum = (base ? handlebarsHelpers.findPrice(allBases, base) : 0)
            + addons.reduce((prev, curr) => (prev + handlebarsHelpers.findPrice(allAddons, curr)), 0);
        return {
            // Selected stuff
            addons,
            base,
            // Calculations
            sum,
            // All possibilities
            allBases,
            allAddons,
        };
    }
}
new CookieMakerApp();
//# sourceMappingURL=index.js.map