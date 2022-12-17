import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type GiftRecordResults = [GiftRecord[], FieldPacket[]]

export class GiftRecord {
    name: string;
    id: string;
    count: number;

    constructor(obj: GiftRecord) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Nazwa prezentu musi mieć od 3 do 55 znaków.');
        }

        if (!obj.count || obj.count < 1 || obj.count > 999999) {
            throw new ValidationError('Liczba szt. prezentu powinna się mieścić w przedziale 1 - 999999.');
        }

        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
    }

    static async listAll(): Promise<GiftRecord[]> | null {
        const [results] = (await pool.execute("SELECT * FROM `gifts`")) as GiftRecordResults;
        return results.map(obj => new GiftRecord(obj));
    }

    static async getOne(id: string): Promise<GiftRecord> {
        const [results] = await pool.execute("SELECT * FROM `gifts` WHERE `id` = :id", {
            id,
        }) as GiftRecordResults;
        return results.length === 0 ? null : new GiftRecord(results[0]);
    }

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `gifts` VALUES(:id, :name, :count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        });

        return this.id;
    }

    async countGivenGifts(): Promise<number> {
        const [[{count}]] /* answer[0][0].count */ = await pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id", {
            id: this.id,
        }) as GiftRecordResults;
        return count;
    }
}

module.exports = {
    GiftRecord,
};
