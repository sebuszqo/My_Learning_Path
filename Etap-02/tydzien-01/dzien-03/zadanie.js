// const {lookup} = require('dns');
// const { promisify } = require('util');

// lookup('google.com', (err, data) => {
//   if (err === null) {
//     console.log(data);
//     return;
//   }
//   console.log('oh,no', err);
// });

// (async () => {
//   try {
//     const data = await promisify(lookup)('google.com');
//     console.log(data.address);
//   } catch (err) {
//     console.log('oh,no', err);
//   }
// })();

const { lookup } = require('dns').promises;

(async () => {
  try {
    const data = await lookup('google.com');
    console.log(data.address);
  } catch (err) {
    console.log('oh,no', err);
  }
})();
