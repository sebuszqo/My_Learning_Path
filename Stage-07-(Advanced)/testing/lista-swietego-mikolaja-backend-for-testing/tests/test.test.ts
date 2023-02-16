import {buildPerson} from "../foobar";

test('adds 1 + 2 to equal 3', () => {

    expect(1 + 2).toBe(3);

});

test('Testing simple array', () => {
    expect([1, 2, 3]).toStrictEqual([1, 2, 3])
});

test('Testing simple objects', () => {
    const person1 = {
        name: 'anna',
        surname: 'testowa',
        age: 123
    }
    const person2 = {
        ...person1,
        surname: "next",
        bio: "Lorem ipsum dolor sit amet..."
    }
    expect(person1).toStrictEqual(person2)
});


test("Is const is null", () => {
    expect(null).toBeNull();
});

test("Is name defined", () => {
    expect("imie").toBeDefined();
});

test("Is buildPerson return is defined", () => {
    expect(buildPerson("Imie", "Nazwisko")).toBeDefined();
});