class User {
    constructor(name) {
        this.firstname = name;
    }
}
const json = '{"firstname": "JAN"}';
const { firstname } = JSON.parse(json);
let user = firstname === '' ? '' : `User: ${firstname}`;
if (user !== '') {
    user = new User(user);
}
console.log(user);
//# sourceMappingURL=task3.js.map