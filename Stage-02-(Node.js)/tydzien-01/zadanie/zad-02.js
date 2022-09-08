const { readdir, stat } = require('fs').promises;

const PATH_TO_FILE = '../';

const showFilesInDirectory = async (path) => {
  try {
    const fileNames = await readdir(`${path}`);

    for (const fileName of fileNames) {
      const fileStat = await stat(`${path}/${fileName}`);

      if (fileStat.isDirectory()) {
        console.log(`|-${fileName}`);
        await showFilesInDirectory(`${path}/${fileName}`);
      } else {
        console.log(`|----------${fileName}`);
      }
    }
  } catch (err) {
    console.log('Ups!', err);
  }
};

showFilesInDirectory(PATH_TO_FILE);
