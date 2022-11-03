// import * as stream from "stream";
//
// const json = '123';
//
// const data = JSON.parse(json) as number;
//
// console.log(data.toFixed(2))
//
// ////// interfejsy

interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}


const personA: Person = {
    name: "Dominik",
    age: 33,
    isDeveloper: true,
}

// const personB: Person = {
//     name: 'Michał',
//     age: 45,
//     isDeveloper: 'tak',
// }
//
// console.log(personA === personB)

function greet(person: Person) {
    console.log(`Hello, ${person.age}`)
}

greet(personA);
greet({
    name: 'Testerka',
    age: 20,
    isDeveloper: true
});

const personC: Person = {
    age: 0, isDeveloper: false, name: ""
}


interface Person2 {
    name: string;
    age: number;
    isDeveloper: boolean;

    greet: () => void;
    // greet(): void;
}

const person: Person2 = {
    name: "Dominik",
    age: 33,
    isDeveloper: true,

    greet(): void {
        console.log(`Hello, ${this.age}`)
    },
}

function dateOfBirth(person: Person2): string {
    const dateOfBirth = new Date().getFullYear() - person.age
    return (`${person.name} was born in ${dateOfBirth}`)
}
