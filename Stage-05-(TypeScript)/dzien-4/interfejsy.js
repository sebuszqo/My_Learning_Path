// import * as stream from "stream";
//
// const json = '123';
//
// const data = JSON.parse(json) as number;
//
// console.log(data.toFixed(2))
//
// ////// interfejsy
const personA = {
    name: "Dominik",
    age: 33,
    isDeveloper: true,
};
// const personB: Person = {
//     name: 'Michał',
//     age: 45,
//     isDeveloper: 'tak',
// }
//
// console.log(personA === personB)
function greet(person) {
    console.log(`Hello, ${person.age}`);
}
greet(personA);
greet({
    name: 'Testerka',
    age: 20,
    isDeveloper: true
});
const personC = {
    age: 0, isDeveloper: false, name: ""
};
const person = {
    name: "Dominik",
    age: 33,
    isDeveloper: true,
    greet() {
        console.log(`Hello, ${this.age}`);
    },
};
function dateOfBirth(person) {
    const dateOfbirth = new Date().getFullYear() - person.age;
    console.log(`${person.name} was born in ${dateOfbirth}`);
}
//# sourceMappingURL=interfejsy.js.map