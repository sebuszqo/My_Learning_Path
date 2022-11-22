// adding abstract to class

abstract class Animal5 {
    protected constructor(protected readonly spieceName: string) {
    }
}


// no i cant do it cuz of abstract
// @ts-ignore
const duck = new Animal5("duck")
