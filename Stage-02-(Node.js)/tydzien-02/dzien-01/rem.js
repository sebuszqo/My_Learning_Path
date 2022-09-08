const { unlink } = require('fs').promises;

(async () => {
  const oldFile = process.argv[2];
  try {
    await unlink(oldFile);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log(`${oldFile} does not exist`);
    } else {
      console.log('Unknown error', e);
    }
  }
})();
