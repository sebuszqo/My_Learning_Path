import {ValidationError} from "../utils/errors";
import {db} from "../utils/db";
import {v4 as uuid} from "uuid";
import {FieldPacket} from "mysql2";

type WarriorRecordResults = [WarriorRecord[], FieldPacket[]]

export class WarriorRecord {
    public id?: string;
    /**
     * Name is always unique.
     */
    public readonly name: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    /**
     * giving constructor an object and Interface as his own class implementation.
     * new WarriorRecord("name", "power", "defence", "stamina", "agility", "wins")
     * Using omit to not create another interface for constructor it's almost the same
     */
    constructor(obj: Omit<WarriorRecord, 'insert' | 'updateWins'>) {
        const {id, name, power, stamina, defence, agility, wins} = obj;
        /**
         * summing all warrior properties cuz our sum of properties should be 10!
         * Throwing ValidationError if there isn't sum of 10
         */
        const stats = [power, stamina, defence, agility]
        const sum = stats.reduce((prev, curr) => prev + curr, 0);

        /**
         * Validation of warrior properties. Every property should count at least 1
         */
        for (const stat of stats) {
            if (stat < 1) {
                throw new ValidationError(`Every of Warrior properties should be at least 1. At least 1 of warrior powers is less than 1!`)
            }
        }

        if (sum !== 10) {
            throw new ValidationError(`Sum of warrior properties have to count 10! Currently your sum is: ${sum}`)
        }

        /**
         * Validation of name length, name should count from 3 to 50 characters.
         */
        if (name.length < 3 || name.length > 50) {
            throw new ValidationError(`Name should count from 3 to 50 characters. Currently your name counts: ${name.length}`)
        }

        // validation if my object has id if not then I am creating new uuid for him
        this.id = id ?? uuid();
        this.name = name;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        // same thing as with 'id' with wins if there is no 'wins' I am setting wins to 0 (default)
        this.wins = wins ?? 0;
    }

    /**
     * Getting One Warrior with id that we are searching
     * @param id
     */
    static async getOneWarrior(id: string): Promise<WarriorRecord | null> {
        const [results] = await db.execute("SELECT * FROM `Warriors` WHERE `id` = :id", {
            id,
        }) as WarriorRecordResults;
        return results.length === 0 ? null : new WarriorRecord(results[0]);
    }

    /**
     * Listing all of our Warriors
     */
    static async listAll(): Promise<WarriorRecord[]> {
        const [results] = await db.execute("SELECT * FROM `Warriors`") as WarriorRecordResults;
        // mapping array of warriors to create Warriors as Objects of WarriorRecord
        return results.map(obj => new WarriorRecord(obj))
    }

    /**
     * Listing only number of the best warriors that we want to display
     * @param topCount
     */
    static async listTopWarriors(topCount: number): Promise<WarriorRecord[]> {
        const [results] = await db.execute("SELECT * FROM `Warriors` ORDER BY `wins` DESC LIMIT :topCount", {
            topCount
        }) as WarriorRecordResults;
        // mapping array of warriors to create Warriors as Objects of WarriorRecord
        return results.map(obj => new WarriorRecord(obj))
    }

    static async isNameTaken(name: string): Promise<boolean> {
        const [results] = await db.execute("SELECT * FROM `Warriors` WHERE `name` = :name", {
            name,
        }) as WarriorRecordResults;
        return results.length > 0;
    }

    /**
     * Inserting new warrior to database
     */
    async insert(): Promise<string> {
        await db.execute("INSERT INTO `Warriors` (`id`, `name`, `power`, `defence`, `stamina`, `agility`, `wins`) VALUES(:id ,:name ,:power ,:defence, :stamina ,:agility ,:wins)", {
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
    }

    /**
     * Updating counter of wins after warrior win
     */
    async updateWins(): Promise<void> {
        await db.execute("UPDATE `Warriors` SET `wins` = :wins WHERE id = :id", {
            id: this.id,
            wins: this.wins
        })
    }
}