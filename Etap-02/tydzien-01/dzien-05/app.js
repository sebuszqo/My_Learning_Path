const {
  readdir, readFile, stat, access,
} = require('fs').promises;
const { W_OK } = require('fs').constants;

const FILE_NAME = './data/hello-world.txt';

(async () => {
  try {
    await readFile(FILE_NAME);
  } catch (error) {
    if (error.code = 'ENOENT') {
      console.log('File is not valid');
    } else console.log('unknown error');
  }
})();
