class Tesssst {
    constructor(private userName: string, public userGender: string) {
    }

    get name(): string {
        return this.userName
    }

    set name(newName) {
        if (!['Michal', 'Kuba'].includes(newName)) {
            throw new Error('Invalid name !')
        }
        this.userName = newName
    }

    get gender(): string {
        return this.userGender
    }

    set gender(newGender) {
        if (!['woman', 'men'].includes(newGender)) {
            throw new Error('Ivalid gender')
        }
        this.userGender = newGender
    }
}

// less amount of code
class Tessssst {
    // @ts-ignore
    @allowListOnly(['Michal', 'Kuba'])
    name: string = 'Michal';

    // @ts-ignore
    @allowListOnly(['Women', 'Man'])
    gender: string = 'man'
}


// @ts-ignore
const foobar = new Tesssst('Michal', 's')
// @ts-ignore
foobar.name = 'Kuba'
// @ts-ignore
foobar.gender = 's'
// @ts-ignore
console.log(foobar.name)