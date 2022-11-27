


export class Warrior {
    constructor(public name:string, public hitPoints:number, public hp:number) {
    }

    setHp(hp:number): void {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }

    getHitPoints() {
        return this.hitPoints;
    }

    getName() {
        return this.name;
    }

    levelUp():void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}
