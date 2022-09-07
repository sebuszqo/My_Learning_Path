const {
  createWriteStream,
  createReadStream,
} = require('fs');
const { pipeline } = require('stream').promises;
const { createGunzip } = require('zlib');

(async () => {
  await pipeline(
    createReadStream('logo-compressed.png'),
    createGunzip(),
    createWriteStream('logo3.png'),
  );
})();
