import { strict as assert } from 'assert';
import { handlebarsHelpers } from './utils/handlebars-helpers';
import { buildPerson } from "./foobar";
assert(handlebarsHelpers.equals(2, 2), "Numbers comparison does not work");
assert(handlebarsHelpers.equals('aa', 'aa'), "String comparison does not work");
// if objects are the same (like same same)
assert.deepStrictEqual({
    name: "Jan",
    surname: "Testowy"
}, {
    name: 'Jan',
    surname: "Testowy"
}, 'Those are not the same people');
assert.deepStrictEqual(buildPerson('Jan', 'Testowy'), {
    name: 'Jan', surname: "Testowy"
}, 'Those are not the same people');
// @TODO: A co jeśli ktoś nie poda surname?
assert.throws(() => buildPerson('', ''), {
    message: "First and last name should not be empty"
}, "buildPerson() does not throw message when empty firstName or secondName");
assert.doesNotThrow(() => buildPerson("Sebastian", "Tak"), 'buildPerson() throws an error.');
//# sourceMappingURL=test.js.map