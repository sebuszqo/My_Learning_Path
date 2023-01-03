const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require('uuid');
const {ChildRecords} = require("./child.records");


class GiftRecords {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Nazwa prezentu musi miec od 3 do 55 znaków!')
        }
        if (!obj.count || obj.count < 1 || obj.count > 999999) {
            throw new ValidationError('Liczba sztuk prezentu powinna miescic sie w przedziale 3 - 999999')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;

    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `gifts`");
        return results.map(obj => new GiftRecords(obj))
    }

    static async findOne(id) {
        const [results] = await pool.execute("SELECT * FROM `gifts` WHERE `id`=:id", {id,});
        return results.length === 0 ? null : results
    }

    async countGivenGifts() {
        const [[{count}]] = await pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id ", {
            id: this.id
        })
        return count;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `gifts` VALUES(:id,:name,:count)", {
            id: this.id,
            name: this.name,
            count: this.count,
        })
        return this.id
    }
}

module.exports = {
    GiftRecords
}