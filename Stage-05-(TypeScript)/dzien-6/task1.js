// ZADANIE 1
function pricify(price, currency = 'PLN', vat = 23) {
    return `${(price + price * (vat / 100)).toFixed(2)} ${currency}`;
}
console.log(pricify(10, 'PLN', 23));
console.log(pricify(10));
//
// const pricify2 = (price: number, currency: string, vat: number): string => {
//     return `${(price + price * (vat / 100)).toFixed(2)} ${currency}`
// }
//
// console.log(pricify2(10, 'PLN', 23))
//# sourceMappingURL=task1.js.map