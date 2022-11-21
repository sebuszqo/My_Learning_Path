class Animal4 {
    constructor(protected readonly spieceName: string) {
    }
}


class Human4 extends Animal4 {

    private isAlive: boolean = true;
    private lifeEventsList: string[] = [];

    constructor(private readonly name: string, private readonly surname: string) {
        super('human')
    }

    get lifeEvents(): string[] {
        // we can copy our array and return it
        // return [...this.lifeEventsList].filter(s => s !== 'Kompromitacja')
        return this.lifeEventsList.filter(s => s !== 'Kompromitacja')
        // return this.lifeEvents
    }

    get alive(): boolean {
        return this.isAlive;
    }

    set alive(newIsAlive: boolean) {
        if (!this.isAlive && newIsAlive) {
            throw new Error('You cannot do it, you are not a god')
        }
        this.isAlive = newIsAlive
    }

    addLifeEvents(eventName: string): void {
        this.lifeEventsList.push(eventName)
        this.checkName()
    }

    foobar(): string {
        return this.spieceName
    }

    private checkName() {
        console.log('To twoje imię: ', this.name)
    }
}

const dominik = new Human4('michal', 'k')
console.log(dominik.alive)
dominik.alive = false
console.log(dominik.alive)
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

