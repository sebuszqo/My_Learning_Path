const express = require('express');
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookies.-data");


const configuratorRouter = express.Router();


configuratorRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;
        if(!COOKIE_BASES[baseName]){
            return res.render('error', {
                description: `There is no such base as ${baseName}.`
            })
        }
        res.cookie('cookieBase', baseName);
        res.render('configurator/base-selected', {baseName});
    })
    .get('/select-addons/:addonName', (req, res) => {
        const {addonName} = req.params;

        if(!COOKIE_ADDONS[addonName]){
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
            // //alternatywny sposob
            // const addons = cookieAddons ? JSON.parse(cookieAddons) : [];
            // addons.push(addonName);
            // mozna zrobic to w utils/get-addons-from-req.js

        }

        res.render('configurator/added', {addonName});

    })
    .get('/remove-addon/:addonRemove', (req,res)=>{
        const {addonRemove} = req.params;

        const {cookieAddons} = req.cookies;

        const addons = (cookieAddons ? JSON.parse(cookieAddons) : []).filter(addon => addon !== addonRemove);
        // addons.filter(addon => addon !== addonRemove); // filter (let exist) only all elements that are not this which we want to remove
        res.cookie('cookieAddons', JSON.stringify(addons));
        res.render('configurator/removed', {addonRemove})
    })

module.exports = {
    configuratorRouter,
};
