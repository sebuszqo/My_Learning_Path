const {ValidationError} = require("../utils/errors");

class Client {
    constructor(obj) {
        const {id, name, email, nextContactAt, notes} = obj;
        if (!id || typeof id !== 'string') {
            throw new ValidationError("ID must be a string and cannot be empty");
        }
        if (!name || typeof name !== 'string' || name.length < 2) {
            throw new ValidationError('Name has to be string and minimum length is 3');
        }
        if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
            throw new ValidationError('Email is incorrect');
        }
        if (typeof nextContactAt !== 'string' || typeof notes !== 'string') {
            throw new ValidationError('Next contact or Notes has to be string')
        }
        this.name = name;
        this.email = email;
        this.id = id;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    Client
}