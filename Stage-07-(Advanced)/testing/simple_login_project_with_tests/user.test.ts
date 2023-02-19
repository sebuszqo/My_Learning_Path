// TDD for user
let user: User;

beforeAll(async () => {
  user = new User();
});

test("User should not be logged in at the beginning", () => {
  expect(user.loggedIn).toEqual(false);
});

test("User should have no e-mail at the beginning", () => {
  expect(user.emial).toBeNull();
});

test("User logged in state should not be modified outside of class", () => {
  expect(() => {
    user.loggedIn = true;
  }).toThrow();
});
