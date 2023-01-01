import { Router } from "express";

// making a 'home' router
export const homeRouter = Router();


homeRouter
    // getting 'main' page
    // express knows types, so I don't need to type all things as req, res etc.
    .get('/', (req,res) =>{
        res.render("home/home");
    })