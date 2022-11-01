// tsnd index.ts
const bool = true;
const num = 22;
const string = 'string';
const foobar = 'Zielony';
// const myArr: Array = ['string'];
const myArr2 = ['string'];
const myArr3 = ['string'];
const myArr4 = ['string'];
//problem
const foobar2 = ['string'];
const num2 = JSON.parse('123'); //--> gives a number
// // how to deal with it
// if (typeof num !== 'string') {
//     throw new Error('invalid data type')
// } else {
//     foobar2.push(num2); //--> ts will add number to array of strings
// }
//
// console.log(foobar2);
// //
const arrayWith2Types = ['abc', 'bac', 2];
//
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["BannedUser"] = 2] = "BannedUser";
})(UserRole || (UserRole = {}));
const bartekUserRole = UserRole.BannedUser;
//
const drink = 123;
//
function procedure() {
    console.log('Hello world');
}
const foobar5 = null;
function random() {
    return Math.random() < 0.6 ? null : Math.random();
}
console.log(random());
const foobar7 = ['sss'];
//# sourceMappingURL=index.js.map