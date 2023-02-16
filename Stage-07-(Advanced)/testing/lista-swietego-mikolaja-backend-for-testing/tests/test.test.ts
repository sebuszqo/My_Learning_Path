import {buildPerson, getMyBodyTemp} from "../foobar";
import {ChildRecord} from "../records/child.record";

test('adds 1 + 2 to equal 3', () => {

    expect(1 + 2).toBe(3);

});

test('Testing simple array', () => {
    expect([1, 2, 3]).toStrictEqual([1, 2, 3])
});

// test('Testing simple objects', () => {
//     const person1 = {
//         name: 'anna',
//         surname: 'testowa',
//         age: 123
//     }
//     const person2 = {
//         ...person1,
//         surname: "next",
//         bio: "Lorem ipsum dolor sit amet..."
//     }
//     expect(person1).toStrictEqual(person2)
// });


test("Is const is null", () => {
    expect(null).toBeNull();
});

test("Is name defined", () => {
    expect("imie").toBeDefined();
});

test("Is buildPerson return is defined", () => {
    expect(buildPerson("Imie", "Nazwisko")).toBeDefined();
});

test("Is buildPerson return is defined", () => {
    expect('-1').toBeTruthy();
});

test("getMyBodyTemp should give real values between 34 and 40 Celsius Degrees", () => {
    expect(getMyBodyTemp()).toBeGreaterThanOrEqual(34);
    expect(getMyBodyTemp()).toBeLessThanOrEqual(41);
})

test("Is function buildPerson return error in such case?", () => {
    expect(() => buildPerson('', '')).toThrow()
})

test("Is 'kot' in 'Ala ma kota'", () => {
    expect("Ala ma kota").toMatch(/kot/)
})

test("Is 1 in my array?", () => {
    expect([1, 23, 3]).not.toContain(2)
})

test('Are children defined in dataBase', async () => {
    const children = await ChildRecord.listAll()
    console.log(children)
    expect(children).toBeDefined();
});