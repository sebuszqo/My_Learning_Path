const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

(async () => {
  // First, we'll generate the key.The key lenghth is dependent on the algorithm.
  // In this case for aes192, it is 24bytes (192 bits).
  const key = await scrypt(password, 'salt', 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
  encrypted += cipher.final('hex');
  console.log({
    encrypted,
    iv: iv.toString('hex'),
  });
})();
