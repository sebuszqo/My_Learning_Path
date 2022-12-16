import {MyRouter} from "../types/my-router";
import {Request, Response, Router} from "express";
import {CookieMakerApp} from "../index";

export class OrderRouter implements MyRouter {
    public readonly router: Router = Router();
    public readonly urlPrefix: string = '/order';

    constructor(private cmapp: CookieMakerApp) {
        this.setUpRoutes();
    }

    private sumary = (req: Request, res: Response): void => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

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

    private thanks = (req: Request, res: Response): void => {
        const {sum} = this.cmapp.getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    }

    private setUpRoutes(): void {
        this.router.get('/summary', this.sumary);
        this.router.get('/thanks', this.thanks);
    }
}


