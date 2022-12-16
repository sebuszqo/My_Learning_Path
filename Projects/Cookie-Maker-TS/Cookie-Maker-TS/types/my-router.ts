import {Router} from "express";

export interface MyRouter {
    urlPrefix: string;
    router: Router;
}