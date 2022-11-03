class User {
    constructor(name, surname, age) {
        this.history = [];
        this.name = name;
        this.surname = surname;
        this.age = age;
        // this.history = []; // bez tego tez zadziala bo TS utworzy to w JS automatycznie
    }
    showHistory() {
        console.log(this.history);
    }
    addHistory(entry) {
        this.history.push(entry);
    }
}
const newperson = new User('S', 'K', 22);
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
//# sourceMappingURL=littlehome.js.map