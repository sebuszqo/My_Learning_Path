export class Warrior {
    constructor(private name:string, private hitPoints:number, private hp:number) {
    }

    setHp(hp:number) {
        this.hp = hp;
    }

    getHp():number {
        return this.hp;
    }

    getHitPoints():number {
        return this.hitPoints;
    }

    getName():string {
        return this.name;
    }

    levelUp():void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}
