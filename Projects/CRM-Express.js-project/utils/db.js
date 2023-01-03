const {readFile, writeFile} = require('fs').promises;
const {join} = require('path');
const {v4: uuid} = require('uuid');
const {Client} = require('../records/client')

class Db {
    constructor(dbFilename) {
        this.dbFilename = join(__dirname, '../data', dbFilename);
        this._loadFile()
    }

    async _loadFile() {
        this._data = JSON.parse(await readFile(this.dbFilename, 'utf-8')).map(obj => new Client(obj));
    }

    _save() {
        writeFile(this.dbFilename, JSON.stringify(this._data), 'utf-8');// do not need to async cuz i don't want to wait to writeFile
    }

    create(obj) {
        const id = uuid();
        this._data.push(new Client({
            id,
            ...obj,
        }));
        this._save()
        return id
    }

    getAll() {
        return this._data;
    }

    getOne(id) {
        return this._data.find(oneObj => oneObj.id === id);
    }

    update(id, newObj) {
        this._data = this._data.map(oneObj => {
            if (oneObj.id === id) {
                return {
                    ...oneObj,
                    ...newObj
                }
            } else {
                return oneObj
            }
        });
        this._save()
    }

    delete(id) {
        this._data = this._data.filter(oneObj => oneObj.id !== id);
        this._save() // debounce !!?
    }


}

const db = new Db('client.json');


module.exports = {
    db
}