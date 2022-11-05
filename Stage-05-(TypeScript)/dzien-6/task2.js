// type Per = undefined;
const data = [
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
function incPoints(obj) {
    obj.points += 1;
}
function totalPoints(arr) {
    return arr.reduce((prev, curr) => prev + curr.points, 0);
}
function personWithMostPoints(arr) {
    // return arr.reduce((prev, curr) => {
    //     if (prev.points < curr.points) {
    //         return curr;
    //     } else {
    //         return prev;
    //     }
    // })
    var _a;
    // return arr.sort((a, b) => {
    //     if (a.points < b.points) {
    //         return 1
    //     } else if (a.points > b.points) {
    //         return -1
    //     } else {
    //         return 0;
    //     }
    // })[0]
    return (_a = [...arr].sort((a, b) => b.points - a.points)[0]) !== null && _a !== void 0 ? _a : null;
}
console.log(totalPoints(data));
incPoints(data[2]);
console.log(totalPoints(data));
console.log(personWithMostPoints([]));
//# sourceMappingURL=task2.js.map