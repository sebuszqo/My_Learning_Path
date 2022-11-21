class Animal {
    constructor(spieceName) {
        this.specieName = spieceName;
    }
}
class Human extends Animal {
    // isAlive: boolean = true;
    constructor(name, surname) {
        super('human');
        this.lifeEvents = [];
        this.name = name;
        this.surname = surname;
    }
}
function greet(person) {
    console.log(person.name);
    console.log(person.specieName);
}
// const person1: Human = new Human('michal', 'michalski')
// greet(person1)
//# sourceMappingURL=classes.js.map