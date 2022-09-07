const {
  createWriteStream,
  createReadStream,
} = require('fs');
const { pipeline } = require('stream').promises;
const { promisify } = require('util');
const { createDecipher } = require('crypto');
const scrypt = promisify(require('crypto').scrypt);
const { createGunzip } = require('zlib');
const { ENCRYPTION_SALT } = require('./constans');

const [, , readPath, writePath, pwd] = process.argv;

(async () => {
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

  await pipeline(
    createReadStream(readPath),
    createGunzip(),
    createDecipher(algorithm, key),
    createWriteStream(writePath),
  );
  console.log('DONE!');
})();
