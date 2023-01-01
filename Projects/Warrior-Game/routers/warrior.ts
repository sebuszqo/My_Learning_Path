import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/errors";

// making a 'warrior' router to handle our warrior ;)
export const warriorRouter = Router();

warriorRouter
    // form to add a new warrior
    .get('/add-form', (req, res) => {
        res.render("warrior/add-form");
    })
    // post to post new warrior
    .post('/', async (req, res) => {

        const {agility, power, defence, stamina, name} = req.body;

        if (await WarriorRecord.isNameTaken(name)) {
            throw new ValidationError(`Name ${name} has already been taken taken, choose different one`)
        }
        // data from form is full of strings, so I have to do it as numbers
        const warrior = new WarriorRecord({
            ...req.body,
            power: Number(power),
            defence: Number(defence),
            stamina: Number(stamina),
            agility: Number(agility)
        })
        // awaiting to add new warrior to DataBase
        const warriorId = await warrior.insert()
        res.render("warrior/warrior-added", {
            name: name,
            id: warriorId
        });
    })