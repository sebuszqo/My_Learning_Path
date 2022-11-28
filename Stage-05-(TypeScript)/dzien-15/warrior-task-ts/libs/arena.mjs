var ActiveWarrior;
(function (ActiveWarrior) {
    ActiveWarrior[ActiveWarrior["First"] = 0] = "First";
    ActiveWarrior[ActiveWarrior["Second"] = 1] = "Second";
})(ActiveWarrior || (ActiveWarrior = {}));
export class Arena {
    constructor(warrior1, warrior2) {
        this.warrior1 = warrior1;
        this.warrior2 = warrior2;
        this.activeWarrior = ActiveWarrior.Second;
    }
    // I dont need it in ts only in js - cuz ts will check it anyway
    // set warrior(warrior: Warrior){
    //     if (!(Warrior instanceof Warrior)) {
    //         // @ts-ignore
    //         throw new Error('warrior must be an instance of Warrior class!');
    //     }
    // }
    fight() {
        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;
        const attackingHitPoints = attacker.hitPoints;
        const attackedOldHp = attacked.hp;
        const attackedNewHp = attackedOldHp - attackingHitPoints;
        console.log(attacker.name, 'is attacking', attacked.name, 'and he/she has', attackedNewHp, 'hp');
        attacked.hp = attackedNewHp;
        this.activeWarrior = this.activeWarrior === ActiveWarrior.First ? ActiveWarrior.Second : ActiveWarrior.First;
        /**
         if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
         */
        if (attackedNewHp <= 0) {
            console.log(attacked.name, 'goes to Valhalla');
            return attacker;
        }
        return null;
    }
}
//# sourceMappingURL=arena.js.map