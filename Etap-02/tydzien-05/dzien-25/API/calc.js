function calculator(operation, a, b) {
    switch (operation) {
        case 'add':
        case 'plus':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Operation in not supported';
    }
    // if (operation === 'add') {
    //   return a + b;
    // }
}

module.exports = {
    calculator,
};
