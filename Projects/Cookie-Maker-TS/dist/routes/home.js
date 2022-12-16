var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "express";
import { rest } from "../decorators/rest.decorators";
const express = require('express');
export class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.urlPrefix = '/';
        this.router = Router();
        this.home = (req, res) => {
            const { sum, addons, base, allBases, allAddons } = this.cmapp.getCookieSettings(req);
            res.render('home/index', {
                cookie: {
                    base,
                    addons,
                },
                allBases,
                allAddons,
                sum,
            });
        };
        this.setUpRoutes();
    }
    setUpRoutes() {
        // this.router.get('/', this.home);
    }
}
__decorate([
    rest('get', '/'),
    __metadata("design:type", Object)
], HomeRouter.prototype, "home", void 0);
//# sourceMappingURL=home.js.map