class Cal {
  constructor(first, second) {
    if (isNaN(first) || isNaN(second)) {
      throw new Error('You gave the wrong type!');
    }
    this.first = Number(first);
    this.second = Number(second);
    this.show();
  }

  show() {
    this.add();
    this.subtract();
    this.multiply();
    this.divide();
  }

  add() {
    console.log(`Dodawanie: ${this.first + this.second}`);
  }

  subtract() {
    console.log(`Odejmowanie: ${this.first - this.second}`);
  }

  multiply() {
    console.log(`Mnożenie: ${this.first * this.second}`);
  }

  divide() {
    if (this.second === 0) throw new Error('You cannot divide by 0!');
    console.log(`Dzielenie: ${this.first / this.second}`);
  }
}

// const firstNumber = prompt("First number: ")
// const secondNumber = prompt("Second number: ")
const firstNumber = 2;
const secondNumber = 0;
try {
  const dzial = new Cal(firstNumber, secondNumber);
  console.log(dzial);
} catch (err) {
  console.log(err.message);
} finally {
  console.log('That is the End!');
}
