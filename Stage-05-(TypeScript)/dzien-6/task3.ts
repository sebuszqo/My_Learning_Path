class User {
    firstname: string

    constructor(name: string) {
        this.firstname = name
    }
}

const json = '{"firstname": "JAN"}';
const {firstname} = JSON.parse(json) as User;
let user: string | User = firstname === '' ? '' : `User: ${firstname}`;

if (user !== '') {
    user = new User(user)
}

console.log(user)