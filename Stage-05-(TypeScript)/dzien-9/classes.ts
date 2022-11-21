class Animal {
    specieName: string;

    constructor(spieceName: string) {
        this.specieName = spieceName
    }
}


class Human extends Animal {
    name: string;
    surname: string;
    lifeEvents: string[] = [];
    isAlive: true;

    // isAlive: boolean = true;

    constructor(name: string, surname: string) {
        super('human')
        this.name = name
        this.surname = surname
    }
}

function greet(person: Human) {
    console.log(person.name)
    console.log(person.specieName)
}

// const person1: Human = new Human('michal', 'michalski')

// greet(person1)

