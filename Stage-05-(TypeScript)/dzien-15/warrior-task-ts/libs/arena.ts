import {Warrior} from "./warrior";

enum ActiveWarrior {
    First,
    Second,
}

export class Arena {
    private activeWarrior: number = ActiveWarrior.Second
    constructor(private warrior1: Warrior, private warrior2:Warrior) {

    }
    // I dont need it in ts only in js - cuz ts will check it anyway
    // set warrior(warrior: Warrior){
    //     if (!(Warrior instanceof Warrior)) {
    //         // @ts-ignore
    //         throw new Error('warrior must be an instance of Warrior class!');
    //     }
    // }

    fight():Warrior | null {
        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;

        const attackingHitPoints = attacker.getHitPoints();
        const attackedOldHp = attacked.getHp();
        const attackedNewHp = attackedOldHp - attackingHitPoints;

        console.log(attacker.getName(), 'is attacking', attacked.getName(), 'and he/she has', attackedNewHp, 'hp');

        attacked.setHp(attackedNewHp);

        this.activeWarrior = this.activeWarrior === ActiveWarrior.First ? ActiveWarrior.Second : ActiveWarrior.First;
        /**
         if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
         */

        if (attackedNewHp <= 0) {
            console.log(attacked.getName(), 'goes to Valhalla');
            return attacker;
        }

        return null;
    }
}

