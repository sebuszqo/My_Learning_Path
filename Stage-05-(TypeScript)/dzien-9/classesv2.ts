class Animal2 {
    constructor(public spieceName: string) {
    }
}


class Human2 extends Animal2 {
    lifeEvents: string[] = [];
    isAlive: true;

    // isAlive: boolean = true;

    constructor(public name: string, public surname: string) {
        super('human')
    }
}

function greet(person: Human2) {
    console.log(person.name)
    console.log(person.spieceName)
}

// let person2 = new Human2('michal', 'michal')
// greet(person2)