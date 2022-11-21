// protected - to taki private ale pozwalający na użycie zmiennych klasy z której dziedziczymy
// private - zmienna prywatna ale tylko w ramach klasy w której jest stworzona, bardzo często korzystamy
class Animal3 {
    constructor(spieceName) {
        this.spieceName = spieceName;
    }
}
class Human3 extends Animal3 {
    constructor(name, surname) {
        super('human');
        this.name = name;
        this.surname = surname;
        this.lifeEvents = [];
    }
    addLifeEvents(eventName) {
        this.lifeEvents.push(eventName);
    }
    getLifeEvents() {
        return this.lifeEvents.filter(s => s !== 'Kompromitacja');
        // return this.lifeEvents
    }
    foobar() {
        return this.spieceName;
    }
}
const michal2 = new Human3('michal', 'k');
console.log(michal2);
michal2.addLifeEvents("Urodziny");
michal2.addLifeEvents("Kompromitacja");
michal2.addLifeEvents("Urodziny");
console.log(michal2.getLifeEvents());
console.log(michal2.foobar());
//# sourceMappingURL=modyfikatory-dostepow-cz2.js.map