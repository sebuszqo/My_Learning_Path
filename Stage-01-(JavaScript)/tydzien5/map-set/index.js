// const mySet = new Set([1, 2, 3, 4, 5, 6, 3, 4, 6, 2, 1, 2, 3]);
// for (const entry of mySet.entries()) {
//     console.log(entry)
// }

const map = {
  cucumber: 7.6,
  tomato: 9,
  mercedes: 15000,
};

const mapa = new Map(Object.entries(map));

console.log(mapa.get('tomato'));
