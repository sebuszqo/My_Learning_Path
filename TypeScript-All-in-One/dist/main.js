const loginUser = (name, email, isPaid = false) => { };
let user = {
    _id: ["123"],
    name: "John",
    email: "    ",
    isActive: true,
};
// // error - readonly
// user._id = "1234";
user.name = "John Doe";
user._id.push("1234");
console.log(user);
const superHeros = [];
const heroPower = [];
superHeros.push("haha");
// Union Types
let username = "John";
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
const data = [1, 2, 3, "4"];
// const user2: (string | number)[] = [1, "hc"];
const user2 = ["John", 1, true];
const rgb = [255, 255, 255];
const newUser = [112, "example@example.com"];
newUser.push("123");
console.log(newUser);
const hcSeat = "AISLE" /* SeatChoice.Aisle */;
console.log(hcSeat);
//# sourceMappingURL=main.js.map