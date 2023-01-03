const express = require('express');


class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/select-addons/:addonName', this.selectAddon);
        this.router.get('/remove-addon/:addonRemove', this.removeAddon);
    }

    selectBase = (req, res) => {
        const {baseName} = req.params;
        if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            return res.render('error', {
                description: `There is no such base as ${baseName}.`
            })
        }
        res.cookie('cookieBase', baseName);
        res.render('configurator/base-selected', {baseName});
    };

    selectAddon = (req, res) => {

        const {addonName} = req.params;

        if (!this.cmapp.data.COOKIE_ADDONS[addonName]) {
            return res.render('error', {
                description: `There is no such addon as ${addonName}.`
            })
        }
        const {cookieAddons} = req.cookies;
        if (!cookieAddons) {
            const listOfAddons = [];
            listOfAddons.push(addonName);
            const list = JSON.stringify(listOfAddons);
            res.cookie('cookieAddons', list);
        } else {
            const cookieAddonsAfterParse = JSON.parse(cookieAddons);
            if (cookieAddonsAfterParse.includes(addonName)) {
                // res.cookie('cookieAddons', JSON.stringify(cookieAddonsAfterParse));
                return res.render('error', {
                    description: `${addonName} has been already added. You cannot added things twice!.`
                })
            } else {
                cookieAddonsAfterParse.push(addonName)
                res.cookie('cookieAddons', JSON.stringify(cookieAddonsAfterParse));
            }
            // alternatywny sposob
            // const addons = cookieAddons ? JSON.parse(cookieAddons) : [];
            // addons.push(addonName);
            // mozna zrobic to w utils/get-addons-from-req.js

        }

        res.render('configurator/added', {addonName});

    };

    removeAddon = (req, res) => {
        const {addonRemove} = req.params;

        const {cookieAddons} = req.cookies;

        const addons = (cookieAddons ? JSON.parse(cookieAddons) : []).filter(addon => addon !== addonRemove);
        // addons.filter(addon => addon !== addonRemove); // filter (let exist) only all elements that are not this which we want to remove
        res.cookie('cookieAddons', JSON.stringify(addons));
        res.render('configurator/removed', {addonRemove});
    };
}

const config = new ConfiguratorRouter();


module.exports = {
    config,
    ConfiguratorRouter
};
