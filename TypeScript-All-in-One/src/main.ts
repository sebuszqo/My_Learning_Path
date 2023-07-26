const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// // data types
// function createUser(user: User) {}
//
// createUser({ email: "", isActive: false, name: "" });

type User = {
  readonly _id: string[];
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

let user: User = {
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

const superHeros: string[] = [];
const heroPower: Array<string> = [];

superHeros.push("haha");

// Union Types
let username: string | number = "John";

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

const data: (number | string)[] = [1, 2, 3, "4"];

// const user2: (string | number)[] = [1, "hc"];

const user2: [string, number, boolean] = ["John", 1, true];

const rgb: [number, number, number] = [255, 255, 255];

type User3 = [number, string];
const newUser: User3 = [112, "example@example.com"];

newUser.push("123");

console.log(newUser);

// Enum

// enum SeatChoice {
//   Aisle,
//   Middle,
//   Window,
// }

const enum SeatChoice {
  Aisle = "AISLE",
  Middle = "MIDDLE",
  Window = "WINDOW",
}

const hcSeat = SeatChoice.Aisle;
console.log(hcSeat);
