export class Warrior {
    constructor(_name, _hitPoints, _hp) {
        this._name = _name;
        this._hitPoints = _hitPoints;
        this._hp = _hp;
    }
    get hitPoints() {
        return this._hitPoints;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }
    get name() {
        return this._name;
    }
    levelUp() {
        this._hitPoints *= 1.1;
        this._hp *= 1.1;
    }
}
//# sourceMappingURL=warrior.js.map