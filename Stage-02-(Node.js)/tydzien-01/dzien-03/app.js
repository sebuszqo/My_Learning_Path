// const { promisify } = require('util');
const { readFile } = require('fs').promises;

(async () => {
  try {
    const data = await readFile('./hash.js');
    console.log(data);
  } catch (err) {
    console.log('oh,no', err);
  }
})();

// const { readFile } = require('fs');
//
//
// readFile('./app.jss', 'utf8', (err, data) => {
//   if (err === null) {
//     console.log(data);
//     return;
//   }
//   console.log('oh noooo', err);
// });

// (async () => {
//   try {
//     const data = await promisify(readFile)('./app.jss', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log('oh,no', err);
//   }
// })();

// readFilePromised('./hash.js', 'utf8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log('oh,no', error);
//   });
