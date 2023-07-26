class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.city = "Seoul";
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const hi = new User2("Hi", 20);
hi.sayHello();
//# sourceMappingURL=index.js.map