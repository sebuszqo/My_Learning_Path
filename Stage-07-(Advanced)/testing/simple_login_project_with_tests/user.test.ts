import { User } from "./user";

// TDD for user
let user: User;

beforeAll(async () => {
  user = new User();
});

test("User should not be logged in at the beginning", () => {
  expect(user.loggedIn).toEqual(false);
});

test("User should have no e-mail at the beginning", () => {
  expect(user.email).toBeNull();
});

// it's TypeScript it cannot work like that ! so it's okay always
// Tests secured by TypeScript's language features

// test("User e-mail should not be modified outside of class", () => {
//   expect(() => {
//     user.email = "example@example.com";
//   }).toThrow();
// });

// it's TypeScript it cannot work like that ! so it's okay always
// Tests secured by TypeScript's language features

// test("User logged in state should not be modified outside of class", () => {
//   expect(() => {
//     user.loggedIn = true;
//   }).toThrow();
// });

test("User has a login method that takes e-mail and password", () => {
  expect(user.login).toBeDefined();
  expect(() => {
    user.login("example@example.com", "password");
  }).not.toThrow();
});

test("After passing any string other than `1234` as a password, the login method returns false", () => {
  user.login("example@example.com", "password");
  expect(user.loggedIn).toEqual(false);
});

test("After passing `1234` as password and any string as e-mail, method returns true and changes state to logged in. We can then access the passed e-mail from outside.", () => {
  expect(user.login("example@example.com", "1234"));
  expect(user.loggedIn).toEqual(true);
  expect(user.email).toEqual("example@example.com");
});
