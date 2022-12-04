import { Router } from 'express';
export class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = Router();
        this.selectBase = (req, res) => {
            const { baseName } = req.params;
            // if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            //     return this.cmapp.showErrorPage(res, `There is no such base as ${baseName}.`);
            // }
            res
                .cookie('cookieBase', baseName)
                .render('configurator/base-selected', {
                baseName,
            });
        };
        this.setUpRoutes();
    }
    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        // this.router.get('/add-addon/:addonName', this.addAddon);
        // this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }
}
//# sourceMappingURL=configurator.js.map