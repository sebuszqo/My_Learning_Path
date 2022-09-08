// const { readFile } = require('fs').promises;
//
// (async () => {
//   const data = await readFile('./hash.js', {
//     encoding: 'utf-8',
//
//   });
// })();

const {
  readFile,
  appendFile,
  writeFile,
} = require('fs').promises;

const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const numberFromFile = await readFile(FILE_NAME, 'utf8');
    const array = numberFromFile.split('\n');
    // console.log(typeof (array[array.length - 1] * 2));
    await appendFile(FILE_NAME, `\n${(array[array.length - 1] * 2)}`, 'utf8'); // * 2 powoduje zapisanie string
  } catch (error) {
    console.log(error);
  }
})();
