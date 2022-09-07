const { readFile, writeFile } = require('fs').promises;

const FIRST_PATH = './data/input1.json';
const SECOND_PATH = './data/sum.txt';

(async () => {
  try {
    let numbers = await readFile(FIRST_PATH, 'utf8'); // prosty odczyt pliku
    console.log('Everything is okay with file!');
    numbers = JSON.parse(numbers); // parsowanie odczytanego JSONA do postaci tablicy
    const sum = numbers.reduce((prev, cur) => prev + cur, 0); // sumowanie liczb za pomocą reduce
    await writeFile(SECOND_PATH, `${sum}`, 'utf8'); // zapis sumy do pliku
    console.log('Writing file done!');
  } catch (error) {
    console.log('Oh, no, something went wrong! ');
  }
})();
