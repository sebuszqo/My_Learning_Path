const {
  createWriteStream,
  createReadStream,
} = require('fs');
const { pipeline } = require('stream').promises;
const { createCipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createGzip } = require('zlib');
const { ENCRYPTION_SALT } = require('./constans');

const [, , readPath, writePath, pwd] = process.argv;

(async () => {
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

  await pipeline(
    createReadStream(readPath),
    createCipher(algorithm, key),
    createGzip(),
    createWriteStream(writePath),
  );
  console.log('DONE!');
})();
