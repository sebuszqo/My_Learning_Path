var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ValidationError } from "../utils/errors";
import { db } from "../utils/db";
import { v4 as uuid } from "uuid";
export class WarriorRecord {
    /**
     * giving constructor an object and Interface as his own class implementation.
     * new WarriorRecord("name", "power", "defence", "stamina", "agility", "wins")
     * Using omit to not create another interface for constructor it's almost the same
     */
    constructor(obj) {
        const { id, name, power, stamina, defence, agility, wins } = obj;
        /**
         * summing all warrior properties cuz our sum of properties should be 10!
         * Throwing ValidationError if there isn't sum of 10
         */
        const stats = [power, stamina, defence, agility];
        const sum = stats.reduce((prev, curr) => prev + curr, 0);
        /**
         * Validation of warrior properties. Every property should count at least 1
         */
        for (const stat of stats) {
            if (stat < 1) {
                throw new ValidationError(`Every of Warrior properties should be at least 1. At least 1 of warrior powers is less than 1!`);
            }
        }
        if (sum !== 10) {
            throw new ValidationError(`Sum of warrior properties have to count 10! Currently your sum is: ${sum}`);
        }
        /**
         * Validation of name length, name should count from 3 to 50 characters.
         */
        if (name.length < 3 || name.length > 50) {
            throw new ValidationError(`Name should count from 3 to 50 characters. Currently your name counts: ${name.length}`);
        }
        // validation if my object has id if not then I am creating new uuid for him
        this.id = id !== null && id !== void 0 ? id : uuid();
        this.name = name;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        // same thing as with 'id' with wins if there is no 'wins' I am setting wins to 0 (default)
        this.wins = wins !== null && wins !== void 0 ? wins : 0;
    }
    /**
     * Getting One Warrior with id that we are searching
     * @param id
     */
    static getOneWarrior(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield db.execute("SELECT * FROM `Warriors` WHERE `id` = :id", {
                id,
            });
            return results.length === 0 ? null : new WarriorRecord(results[0]);
        });
    }
    /**
     * Listing all of our Warriors
     */
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield db.execute("SELECT * FROM `Warriors`");
            // mapping array of warriors to create Warriors as Objects of WarriorRecord
            return results.map(obj => new WarriorRecord(obj));
        });
    }
    /**
     * Listing only number of the best warriors that we want to display
     * @param topCount
     */
    static listTopWarriors(topCount) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield db.execute("SELECT * FROM `Warriors` ORDER BY `wins` DESC LIMIT :topCount", {
                topCount
            });
            // mapping array of warriors to create Warriors as Objects of WarriorRecord
            return results.map(obj => new WarriorRecord(obj));
        });
    }
    static isNameTaken(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = yield db.execute("SELECT * FROM `Warriors` WHERE `name` = :name", {
                name,
            });
            return results.length > 0;
        });
    }
    /**
     * Inserting new warrior to database
     */
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db.execute("INSERT INTO `Warriors` (`id`, `name`, `power`, `defence`, `stamina`, `agility`, `wins`) VALUES(:id ,:name ,:power ,:defence, :stamina ,:agility ,:wins)", {
                id: this.id,
                // Making first letter of string uppercase cuz it's name
                name: this.name.replace(/^\w/, c => c.toUpperCase()),
                power: this.power,
                defence: this.defence,
                stamina: this.stamina,
                agility: this.agility,
                wins: this.wins
            });
            return this.id;
        });
    }
    /**
     * Updating counter of wins after warrior win
     */
    updateWins() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db.execute("UPDATE `Warriors` SET `wins` = :wins WHERE id = :id", {
                id: this.id,
                wins: this.wins
            });
        });
    }
}
//# sourceMappingURL=warrior.record.js.map