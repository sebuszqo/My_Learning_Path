const { mkdir } = require('fs').promises;

const { rename } = require('fs').promises;

(async () => {
  try {
    await rename('./folderek/data/dada1.txt', './folderek/nazwa1.txt');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Given file name does not exist.');
    } else {
      console.log('Oh,no I do not know what have you done!');
    }
  }
})();
