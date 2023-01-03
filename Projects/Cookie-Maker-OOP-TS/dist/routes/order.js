import { Router } from "express";
export class OrderRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = Router();
        this.urlPrefix = '/order';
        this.sumary = (req, res) => {
            const { sum, addons, base, allBases, allAddons } = this.cmapp.getCookieSettings(req);
            res.render('order/summary', {
                cookie: {
                    base,
                    addons,
                },
                allBases,
                allAddons,
                sum,
            });
        };
        this.thanks = (req, res) => {
            const { sum } = this.cmapp.getCookieSettings(req);
            res
                .clearCookie('cookieBase')
                .clearCookie('cookieAddons')
                .render('order/thanks', {
                sum,
            });
        };
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/summary', this.sumary);
        this.router.get('/thanks', this.thanks);
    }
}
//# sourceMappingURL=order.js.map