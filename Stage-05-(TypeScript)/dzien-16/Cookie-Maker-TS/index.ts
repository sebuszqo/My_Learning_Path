import * as express from 'express';

import * as cookieParser from 'cookie-parser';

import * as hbs from 'express-handlebars';

const {HomeRouter} = require("./routes/home");
const {ConfiguratorRouter} = require("./routes/configurator");
const {OrderRouter} = require("./routes/order");
const {handlebarsHelpers} = require("./utils/handlebars-helpers");
const {COOKIE_BASES, COOKIE_ADDONS} = require("./data/cookies-data");

class CookieMakerApp {
    constructor() {
        this._loadData();
        this._configureApp();
        this._setRoutes();
        this._run();
    }

    _configureApp() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cookieParser());
        this.app.engine('.hbs', hbs({
            extname: '.hbs',
            helpers: handlebarsHelpers,
        }));
        this.app.set('view engine', '.hbs');
    }

    _setRoutes() {
        this.app.use('/', new HomeRouter(this).router);
        this.app.use('/configurator', new ConfiguratorRouter(this).router);
        this.app.use('/order', new OrderRouter(this).router);
    }

    _run() {
        this.app.listen(3000, '0.0.0.0', () => {
            console.log('Listening on :3000');
        });
    }

    showErrorPage(res, description) {
        res.render('error', {
            description,
        });
    }

    getAddonsFromReq(req) {
        const {cookieAddons} = req.cookies;
        return cookieAddons ? JSON.parse(cookieAddons) : [];
    }

    getCookieSettings(req) {
        const {cookieBase: base} = req.cookies;

        const addons = this.getAddonsFromReq(req);

        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allAddons = Object.entries(this.data.COOKIE_ADDONS);

        const sum = (base ? handlebarsHelpers.findPrice(allBases, base) : 0)
            + addons.reduce((prev, curr) => (
                prev + handlebarsHelpers.findPrice(allAddons, curr)
            ), 0);

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

    _loadData() {
        this.data = {
            COOKIE_BASES,
            COOKIE_ADDONS,
        };
    }
}

new CookieMakerApp();
