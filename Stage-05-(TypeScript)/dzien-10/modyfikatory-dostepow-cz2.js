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
        return this.lifeEvents;
    }
}
//# sourceMappingURL=modyfikatory-dostepow-cz2.js.map