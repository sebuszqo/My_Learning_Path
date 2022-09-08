const { rm } = require('fs').promises;

(async () => {
  const oldFile = process.argv[2];
  try {
    await rm(oldFile, {
      recursive: true,
    });
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log(`${oldFile} does not exist`);
    } else {
      console.log('Unknown error', e);
    }
  }
})();
