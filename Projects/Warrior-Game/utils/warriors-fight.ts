import {WarriorRecord} from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    log: string[], winner: WarriorRecord
} => {
    const log: string[] = [];

    // making 2 warrior tmp stats object to change and use tmp data as
    //for example current health without changing anything in main object
    const warrior1TmpStats = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
        warrior: warrior1
    };

    const warrior2TmpStats = {
        hp: warrior2.stamina * 10,
        dp: warrior2.defence,
        warrior: warrior2
    };

    let attacker = warrior1TmpStats;
    let defender = warrior2TmpStats

    // loop algorithm to make a fight
    do {
        const attackStrength = attacker.warrior.power

        log.push(`${attacker.warrior.name} will attack ${defender.warrior.name} with strength of ${attackStrength}`)
        // DP: 5, HP: 5, attackStrength: 7

        if (defender.dp + defender.warrior.agility > attackStrength) {
            defender.dp -= attackStrength
            log.push(`${defender.warrior.name} can defend himself from attack of ${attacker.warrior.name}`)

            // DP: -2, HP: 5

            if (defender.dp < 0) {
                defender.hp += defender.dp
                log.push(`${attacker.warrior.name} broke through the ${defender.warrior.name} defense, dealing ${-defender.dp
                } damage`)
                // DP = 5 - -(-2) = 5 - 2 = 3
            }
        } else {
            log.push(`${attacker.warrior.name} dealt ${attackStrength} damage ${defender.warrior.name}`)
            //warrior cannot defend himself so his hp is -= attackStrength
            defender.hp -= attackStrength;
        }
        // reversing  defender with attacker by using destructuring arrays
        [defender, attacker] = [attacker, defender];

        //  they are fighting until one of them is dead
    } while (attacker.hp > 0);

    const winner = defender.warrior;
    log.push(`${winner.name} won !`)
    return {
        log,
        winner
    };
};