import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

// making a 'hallOfFameRouter' router to handle our warrior ;)
export const hallOfFameRouter = Router();

hallOfFameRouter
    // getting the best warriors
    .get('/', async (req, res) => {
        // adding place to my object to use it in handlebars
        const warriors = (await WarriorRecord.listTopWarriors(10)).map((warrior, index) => {
            return {
                place: index + 1,
                warrior
            }
        });

        res.render("hall-of-fame/list",
            {warriors});
    });
