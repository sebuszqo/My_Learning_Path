// protected - to taki private ale pozwalający na użycie zmiennych klasy z której dziedziczymy
// private - zmienna prywatna ale tylko w ramach klasy w której jest stworzona, bardzo często korzystamy


class Animal3 {
    constructor(protected readonly spieceName: string) {
    }
}


class Human3 extends Animal3 {

    private lifeEvents: string[] = [];
    private isAlive: true;

    constructor(public readonly name: string, public readonly surname: string) {
        super('human')
    }

    addLifeEvents(eventName: string): void {
        this.lifeEvents.push(eventName)
    }

    getLifeEvents(): string[] {
        return this.lifeEvents.filter(s => s !== 'Kompromitacja')
        // return this.lifeEvents
    }

    foobar(): string {
        return this.spieceName
    }
}

const michal2 = new Human3('michal', 'k')
console.log(michal2)
michal2.addLifeEvents("Urodziny")
michal2.addLifeEvents("Kompromitacja")
michal2.addLifeEvents("Urodziny")
console.log(michal2.getLifeEvents())
console.log(michal2.foobar())

