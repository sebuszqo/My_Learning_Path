export class Warrior {
    constructor(private _name: string, private _hitPoints: number, private _hp: number) {
    }

    get hitPoints(): number {
        return this._hitPoints;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get name(): string {
        return this._name;
    }

    levelUp(): void {
        this._hitPoints *= 1.1;
        this._hp *= 1.1;
    }
}
