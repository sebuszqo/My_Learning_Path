var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";
import { ValidationError } from "../utils/errors";
// making a 'warrior' router to handle our warrior ;)
export const warriorRouter = Router();
warriorRouter
    // form to add a new warrior
    .get('/add-form', (req, res) => {
    res.render("warrior/add-form");
})
    // post to post new warrior
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { agility, power, defence, stamina, name } = req.body;
    if (yield WarriorRecord.isNameTaken(name)) {
        throw new ValidationError(`Name ${name} has already been taken taken, choose different one`);
    }
    // data from form is full of strings, so I have to do it as numbers
    const warrior = new WarriorRecord(Object.assign(Object.assign({}, req.body), { power: Number(power), defence: Number(defence), stamina: Number(stamina), agility: Number(agility) }));
    // awaiting to add new warrior to DataBase
    const warriorId = yield warrior.insert();
    res.render("warrior/warrior-added", {
        name: name,
        id: warriorId
    });
}));
//# sourceMappingURL=warrior.js.map