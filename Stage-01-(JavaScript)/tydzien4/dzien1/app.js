const ar = [1, 2, 3, 4, 5];

// wszystkie robią jedno i to samo

for (let i = 0; i < ar.length; i++) {
  const number = ar[i];
  console.log(number);
}

ar.forEach((number) => {
  console.log(number);
});

for (const number of ar) {
  console.log(number);
}

const obj = {
  name: 'Jan',
  surname: 'kovalski',
  age: 123,
};

// podaje wszystkie klucze znajdujace sie w obiekcie w postaci tablicy
const keys = Object.keys(obj);
console.log(keys);
// podaje wszystkie wartoscsi znajdujace sie w obiekcie w postaci tablicy
const values = Object.values(obj);
console.log(values);
// 2 wyzej polaczone w jedno, tablica tablic (dwuwymiarowa)
const entries = Object.entries(obj);
console.log(entries);

for (const entry of entries) {
  const [name, value] = entry;
  console.log(name, value);
}

for (const key of keys) {
  console.log(key, obj[key]);
}

for (const key in obj) {
  console.log(key, obj[key]);
}

const array = [1, 2, 3, 4];
const sum = array.reduce((prev, element) => prev + element, 0);
console.log(sum);

const namesLength = ['anna', 'andrzej', 'bartłomiej', 'jakub', 'barbara'];
const after = namesLength.reduce((prev, curr) => prev + curr.length, 0);

// const after = names
//     .filter(name => name[0] === "b")
//     .join(' ');
console.log(after);
