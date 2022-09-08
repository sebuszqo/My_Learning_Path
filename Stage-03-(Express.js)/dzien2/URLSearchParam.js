// const {URLSearchParams} = require('url');
//
// const qs = new URLSearchParams({
//     name: 'John & Jacob?',
// });
// console.log(`http://localhost:3000/?${qs.toString()}`);

// safe way to change + into %20
const {URLSearchParams} = require('url');

function generateQueryString(params) {
    const qs = new URLSearchParams(params);
    return `${qs}`.replace(/\+/g, '%20') //regex
}

console.log(`http://localhost:3000/?${generateQueryString({
    name: 'Jacob & Jacob?',
})}`.toString());
