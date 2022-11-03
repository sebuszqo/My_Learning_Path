interface Human {
    name: string;
    surname: string;
    age: number;
}

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface HistoryMember {
    history: HistoryEntry[];
}

class User implements Human, HistoryMember {
    age: number;
    name: string;
    surname: string;
    history: HistoryEntry[] = [];

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        // this.history = []; // bez tego tez zadziala bo TS utworzy to w JS automatycznie
    }

    showHistory(): void {
        console.log(this.history)
    }

    addHistory(entry: HistoryEntry): void {
        this.history.push(entry)
    }


}

const newperson = new User('S', 'K', 22)
newperson.showHistory(); // []
newperson.addHistory({
    createdAt: new Date(),
    event: 'Zalogowano.',
});
newperson.showHistory();

/*
{
    createdAt: new Date(),
    event: 'Zalogowano.',
}
 */