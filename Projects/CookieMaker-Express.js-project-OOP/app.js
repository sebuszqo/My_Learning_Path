const express = require('express');
const cookieParser = require('cookie-parser');
const {engine} = require("express-handlebars");
const {handlebarsHelpers} = require("./handlebars-helpers");
const {home, HomeRouter} = require("./routes/home");
const {config, ConfiguratorRouter} = require("./routes/configurator");
const {OrderRouter} = require("./routes/order");
const {COOKIE_ADDONS, COOKIE_BASES} = require("./data/cookies.-data");

class CookieMakerApp {
    constructor() {
        this._loadData();
        this._configureApp();
        this._setRoutes();
        this._runApp();x
    }

    _configureApp() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({
            extended: true,
        }));
        this.app.engine('.hbs', engine({
            extname: '.hbs',
            helpers: handlebarsHelpers,
        }));
        this.app.set('view engine', '.hbs');
    }

    _setRoutes() {
        this.app.use('/', new HomeRouter(this).router);
        this.app.use('/config', new ConfiguratorRouter(this).router);
        this.app.use('/order', new OrderRouter(this).router);
    }

    _runApp() {
        this.app.listen(3002, 'localhost', () => {
            console.log("Listening on http://localhost:3002")
        });
    }

    _loadData() {
        this.data = {
            COOKIE_ADDONS,
            COOKIE_BASES,
        };
    }
}

new CookieMakerApp();