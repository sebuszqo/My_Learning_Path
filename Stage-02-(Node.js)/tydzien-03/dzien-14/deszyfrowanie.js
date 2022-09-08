const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const encrypted = 'f7b880c932d9c8fb40a2f82ab3144cd4a04143f42ea92bedf55dceb1d4646d13';
const ivHex = '1f89112c55e50a2b40a9cf936c0e8993';

(async () => {
  // First, we'll generate the key. The key length is dependent on the algorithm.
  // In this case for aes192, it is 24 bytes (192 bits).
  const key = await scrypt(password, 'salt', 24);
  const iv = Buffer.from(ivHex, 'hex'); // Initialization vector.

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(decrypted);
})();
