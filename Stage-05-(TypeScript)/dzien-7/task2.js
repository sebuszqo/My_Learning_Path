// Uzupełnij typy - w jaki sposób możesz to zrobić? Czy musisz coś jeszcze modyfikować?
const product = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: false,
};
function getProductProp(obj, propName) {
    return obj[propName];
}
const count = getProductProp(product, 'count');
const degraded = getProductProp(product, 'isDegradable');
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`);
//# sourceMappingURL=task2.js.map