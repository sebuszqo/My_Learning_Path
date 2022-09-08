const express = require('express');


const configuratorRouter = express.Router();


configuratorRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;
        res.cookie('cookieBase', baseName);
        res.render('configurator/base-selected', {baseName});
    })
    .get('/select-addons/:addonName', (req, res) => {
        const {addonName} = req.params;
        const {cookieAddons} = req.cookies;
        if (!cookieAddons) {
            const listOfAddons = [];
            listOfAddons.push(addonName);
            const list = JSON.stringify(listOfAddons);
            res.cookie('cookieAddons', list);
        } else {
            const cookieAddonsAfterParse = JSON.parse(cookieAddons);
            if (cookieAddonsAfterParse.includes(addonName)) {
                res.cookie('cookieAddons', JSON.stringify(cookieAddonsAfterParse));
            } else {
                cookieAddonsAfterParse.push(addonName)
                res.cookie('cookieAddons', JSON.stringify(cookieAddonsAfterParse));
            }
        }

        res.render('configurator/added', {addonName});

    })

module.exports = {
    configuratorRouter,
};
