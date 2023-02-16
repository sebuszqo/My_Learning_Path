export const buildPerson = (firstName: string, lastName: string) => {
    if (!firstName || !lastName) {
        throw new Error("First and last name should not be empty")
    }

    return {
        name: firstName,
        surname: lastName,
    }
};

// (max - min) + min --> zakres
export const getMyBodyTemp = (): number => Math.random() * (41 - 34) + 34;