const {handlebarsHelpers} = require("../handlebars-helpers");
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies.-data");

function getCookieSettings(req) {
    const {cookieAddons, cookieBase} = req.cookies
    const allBases = Object.entries(COOKIE_BASES)
    const allAddons = Object.entries(COOKIE_ADDONS)
    let addons
    if (!cookieAddons) {
        addons = []
    } else {
        addons = JSON.parse(cookieAddons)
    }

    const sum = (cookieBase ? handlebarsHelpers.findPrice(allBases, cookieBase) : 0)
        + addons.reduce((prev, curr) => {

            return prev + handlebarsHelpers.findPrice(allAddons, curr)
        }, 0);
    console.log(sum)
    return{
        // Selected stuff
        addons,
        cookieBase,
        // sum
        sum,
        // All possibilities
        allBases,
        allAddons,


    }
}
module.exports={
    getCookieSettings,
}