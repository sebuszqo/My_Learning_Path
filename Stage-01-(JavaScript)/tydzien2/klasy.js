// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log("hello");
//     }
//     setAge(age) {
//
//     }
// }
// const alice = new Person('Alicja');
// console.log(alice.name);
// alice.sayHello();
//
//
// // function Person (){
// //     this.sayHello = function (){
// //         console.log('Hello');
// //     };
// // }
// //

class Country {
  constructor(currency, language, currencyConvertRatioToUsd) {
    this.currency = currency;
    this.language = language;
    this.ratio = currencyConvertRatioToUsd;
    this.isShengen = true;
  }

  change(valueInLocalCurrency) {
    return valueInLocalCurrency * this.ratio;
  }
}
const poland = new Country('PLN', 'Polish', 1 / 4.2);
// console.log(poland);
const souvenirInPln = 60;
const souvenirInUsd = poland.change(souvenirInPln);
console.log(`${souvenirInUsd} USD`);

console.log(`${poland.change(10)} USD`);
