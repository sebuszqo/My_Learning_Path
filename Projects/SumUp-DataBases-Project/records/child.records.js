const {ValidationError} = require("../utils/errors");
const {pool} = require("../utils/db");
const {v4: uuid} = require("uuid");

class ChildRecords {

    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Imię dziecka musi mieć od 3 do 25 znaków!')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
        return results.map(obj => new ChildRecords(obj));
    }

    static async findOne(id) {
        const [results] = await pool.execute("SELECT * FROM `children` WHERE `id`=:id", {id,});
        return results.length === 0 ? null : new ChildRecords(results[0]);
    }

    async update() {
        console.log(this.giftId)
        await pool.execute("UPDATE `children` SET `name` =:name, `giftId`=:giftId WHERE `id`=:id", {
            id: this.id,
            name: this.name,
            giftId: this.giftId
        })
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `children`(`id`,`name`) VALUES(:id,:name)", {
            id: this.id,
            name: this.name,
        })
        return this.id
    }
}

module.exports = {
    ChildRecords
}