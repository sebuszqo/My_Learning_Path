interface DataToGame {
    name: string;
    points: number;
}

// type Per = undefined;

const data: DataToGame[] = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 500,
    },
    {
        name: 'Ola',
        points: 0,
    },
    {
        name: 'Natalia',
        points: 10000,
    },
];

function incPoints(obj: DataToGame): void {
    obj.points += 1
}

function totalPoints(arr: DataToGame[]): number {
    return arr.reduce((prev, curr) => prev + curr.points, 0)
}

function personWithMostPoints(arr: DataToGame[]): DataToGame | null {
    // return arr.reduce((prev, curr) => {
    //     if (prev.points < curr.points) {
    //         return curr;
    //     } else {
    //         return prev;
    //     }
    // })

    // return arr.sort((a, b) => {
    //     if (a.points < b.points) {
    //         return 1
    //     } else if (a.points > b.points) {
    //         return -1
    //     } else {
    //         return 0;
    //     }
    // })[0]

    return [...arr].sort((a, b) => b.points - a.points)[0] ?? null;

}

console.log(totalPoints(data))
incPoints(data[2])
console.log(totalPoints(data))
console.log(personWithMostPoints([]))