const handlebarsHelpers = {
    upper: function (string) {
        return string.toUpperCase()
    },
    findPrice: (entries, selectedItem) => {
        // console.log({entries, selectedItem});
        const found = entries.find(el => el[0] === selectedItem);
        if (!found) {
            throw new Error(`Cannot find price of ${selectedItem}`);
        }
        const [, price] = found;
        return price
    },
    pricify: price => price.toFixed(2),
    falsy: (cookieBase) => {
        // console.log(cookieBase)
        return cookieBase !== 'undefined';

    },
    isNotInArray: (arr, el) =>{
        return !arr.includes(el);
    },
    isInArray: (arr, el) =>{
        return arr.includes(el);
    }

}

module.exports = {
    handlebarsHelpers,
}
