// const numbers = []; // zawsze liczba mnoga !!
// numbers.push(1, 2, 3);
// console.log(numbers);
//
// numbers.forEach (num => console.log(num));
//
//
// numbers.forEach ((number, i, array) => {
//     array[i] = number + 2;
// }
// );
// console.log(numbers);

// const numbers = [1, 2, 3];

// const newNumbers = numbers.map ((number, index, array) => {
//     return number + 2;
// });
//
// //powastaje nowa tablica tablica [undef,undef,undef]
//
// const newNumbers1 = numbers.map((number)=>{
//     return number.toString();
// })
//
// const newNumbers2 = numbers.map(number => number + 2);
//
//
// /**
//  * [?,?,?] map nowa tablica majaca tyle elementow ile ta oryginalna
//  */
//
//
// const newNumbers3 = numbers.filter((element, index)=> element % 2 === 0);

/**
 * pusta tablica nie wie ile elementow
 * wywoluje tyle ile w starej tablicy
 * filtruje 0 --> nie kopiuje albo 1 --> kopiuje
 *
 */
const numbers = [2, 5, 6, 3, 4];
const newNumberMultipliedBy2 = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .forEach((num) => console.log(num));
