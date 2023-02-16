export const buildPerson = (firstName, lastName) => {
    if (!firstName || !lastName) {
        throw new Error("First and last name should not be empty");
    }
    return {
        name: firstName,
        surname: lastName,
    };
};
//# sourceMappingURL=foobar.js.map