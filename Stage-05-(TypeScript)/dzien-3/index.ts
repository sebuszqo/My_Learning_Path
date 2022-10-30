// tsnd index.ts
const bool: boolean = true;
const num: number = 22;
const string: string = 'string';
const foobar: 'Biały' | 'Zółty' | 'Zielony' = 'Zielony';
// const myArr: Array = ['string'];
const myArr2: Array<string> = ['string'];
const myArr3: Array<any> = ['string'];
const myArr4: Array<string | number> = ['string'];


//problem
const foobar2: Array<string> = ['string']

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

const arrayWith2Types: (number | string)[] = ['abc', 'bac', 2]

//

enum UserRole {
    Admin,
    User,
    BannedUser,

}

const bartekUserRole = UserRole.BannedUser

//
const drink: any = 123;

//
function procedure(): void {
    console.log('Hello world')
}


const foobar5: null | number = null;

function random(): null | number {
    return Math.random() < 0.6 ? null : Math.random();
}

console.log(random())