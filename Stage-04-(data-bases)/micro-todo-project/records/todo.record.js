const {pool} = require("../utils/db");
const {v4: uuid} = require('uuid');


class TodoRecord {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.timeToGo = obj.timeToGo;
        // this._validate()
    }

    static async find(id) {
        const [results] = await pool.execute('SELECT * FROM `todos` WHERE `id`= :id', {
            id: id,
        });
        return results.length === 1 ? new TodoRecord(results[0]) : null;
    }

    static async findAll() {
        const [allResults] = await pool.execute('SELECT * FROM `todos` ORDER BY `timeToGo` ASC');
        return allResults.map(result => new TodoRecord(result))
    }

    // _validate() {
    //     if (this.title.trim().length < 5) {
    //         throw new Error('Todo tittle should be at least 5 characters.')
    //     }
    //     if (this.title.length > 150) {
    //         throw new Error('Todo tittle should be at most than 150 characters.')
    //     }
    // }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        } else {
            this.id = obj.id;
        }
        this.timeToGo = this.timeToGo ?? new Date();
        await pool.execute('INSERT INTO `todos` VALUES(:id,:title,:date);', {
            id: this.id,
            title: this.title,
            date: this.timeToGo,
        })
        return this.id;
    }

    async delete() {
        if (!this.id) {
            throw new Error('Todo has no ID.')
        }
        await pool.execute('DELETE FROM `todos` WHERE `id`=:id;', {
            id: this.id,
        })
        return this.id;
    }

    async update(title, timeToGo) {
        this.title = title;
        this.timeToGo = timeToGo;
        // this._validate();
        const {affectedRows} = (await pool.execute('UPDATE `todos` SET `title`= :title, `timeToGo`=:timeToGo WHERE `id` = :id;', {
            id: this.id,
            title: this.title,
            timeToGo: this.timeToGo,
        }))[0];
        return affectedRows;
    }
}

module.exports = {
    TodoRecord,
}