interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    achievements?: string[];
}


const person1: Person = {
    name: 'Bartek',
    surname: 'k',
    age: 28,
    isDeveloper: true,
    achievements: ['Forbes 30 u 30', 'Forbes 30 u 3']
};


const person2: Person = {
    name: 'Michał',
    surname: 'k',
    age: 33,
    isDeveloper: true,
    achievements: []
};


const ar: Person[] = [
    {
        name: 'SEBASTIAN',
        surname: 'k',
        age: 22,
        isDeveloper: true,
        achievements: [],
    },
]