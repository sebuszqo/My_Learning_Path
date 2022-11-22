class Animal4 {
    constructor(spieceName) {
        this.spieceName = spieceName;
    }
}
class Human4 extends Animal4 {
    constructor(name, surname) {
        super('human');
        this.name = name;
        this.surname = surname;
        this.isAlive = true;
        this.lifeEventsList = [];
    }
    get lifeEvents() {
        // we can copy our array and return it as a copy
        // cuz when we try push on .lifeEvents.push() - we are pushing not by a method to addLiveEvents but normal push - so that would be different thing
        // return [...this.lifeEventsList].filter(s => s !== 'Kompromitacja')
        return this.lifeEventsList.filter(s => s !== 'Kompromitacja');
        // return this.lifeEvents
    }
    get alive() {
        return this.isAlive;
    }
    set alive(newIsAlive) {
        if (!this.isAlive && newIsAlive) {
            throw new Error('You cannot do it, you are not a god');
        }
        this.isAlive = newIsAlive;
    }
    addLifeEvents(eventName) {
        this.lifeEventsList.push(eventName);
        this.checkName();
    }
    foobar() {
        return this.spieceName;
    }
    checkName() {
        console.log('To twoje imię: ', this.name);
    }
}
const dominik = new Human4('michal', 'k');
console.log(dominik.alive);
dominik.alive = false;
console.log(dominik.alive);
// dominik.alive = true
//dominik.alive = false // it will not work
// console.log(michal2)
// michal2.addLifeEvents("Urodziny")
// michal2.addLifeEvents("Kompromitacja")
// michal2.addLifeEvents("Urodziny")
// console.log(michal2.getLifeEvents())
// console.log(michal2.foobar())
//
// // thanks to getter
// michal2.getLifeEvents()
//# sourceMappingURL=getters-setters.js.map