const express = require('express');
const {getCookieSettings} = require("../util/get-cookie-settings");


const orderRouter = express.Router();

orderRouter
    .get('/summary',(req,res)=>{
        const {cookieBase,addons,allBases,allAddons,sum}=getCookieSettings(req)

        res.render('order/summary', {
            cookie: {
                base: `${cookieBase}`,
                addons: addons,
            },
            bases: allBases,
            addons: allAddons,
            sum: sum,
        })
    })
    .get('/thanks',(req,res)=>{
        const {sum} =getCookieSettings(req)
        res.clearCookie('cookieBase')
        res.clearCookie('cookieAddons')
        res.render('order/thanks',{sum})

    })

module.exports = {
    orderRouter,
};
