class Animal3 {
    constructor(private readonly spieceName: string) {
    }
}


class Human3 extends Animal3 {
    private isAlive: true;
    private readonly lifeEvents: string[] = [];

    constructor(public readonly name: string, public readonly surname: string) {
        super('human')
    }

    addLifeEvents(eventName: string) {
        this.lifeEvents.push(eventName)
    }

    getLifeEvents() {
        return this.lifeEvents
    }
}


