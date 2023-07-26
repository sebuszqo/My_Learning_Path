class User2 {
  readonly city: string = "Seoul";

  constructor(public name: string, public age: number) {}

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const hi = new User2("Hi", 20);
hi.sayHello();
