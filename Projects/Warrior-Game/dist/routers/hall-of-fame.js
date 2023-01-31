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
// making a 'hallOfFameRouter' router to handle our warrior ;)
export const hallOfFameRouter = Router();
hallOfFameRouter
    // getting the best warriors
    .get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // adding place to my object to use it in handlebars
    const warriors = (yield WarriorRecord.listTopWarriors(10)).map((warrior, index) => {
        return {
            place: index + 1,
            warrior
        };
    });
    res.render("hall-of-fame/list", { warriors });
}));
//# sourceMappingURL=hall-of-fame.js.map