const {ObjectId} = require("mongodb");

class TodoRecord {

    constructor(obj) {
        this._id = ObjectId(obj._id);
        this.title = obj.title;
        this._validate()
    }

    _validate() {
        if (this.title.trim().length < 5) {
            throw new Error('Todo tittle should be at least 5 characters.')
        }
        if (this.title.length > 150) {
            throw new Error('Todo tittle should be at most than 150 characters.')
        }
    }
}

module.exports = {
    TodoRecord,
};