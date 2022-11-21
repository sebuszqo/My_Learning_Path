class Animal2 {
    constructor(spieceName) {
        this.spieceName = spieceName;
    }
}
class Human2 extends Animal2 {
    // isAlive: boolean = true;
    constructor(name, surname) {
        super('human');
        this.name = name;
        this.surname = surname;
        this.lifeEvents = [];
    }
}
function greet(person) {
    console.log(person.name);
    console.log(person.spieceName);
}
// let person2 = new Human2('michal', 'michal')
// greet(person2)
//# sourceMappingURL=classesv2.js.map