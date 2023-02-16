export const buildPerson = (firstName: string, lastName: string) => {
    if (!firstName || !lastName) {
        throw new Error("First and last name should not be empty")
    }

    return {
        name: firstName,
        surname: lastName,
    }
};