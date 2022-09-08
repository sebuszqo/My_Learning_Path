const {
  encryptText,
  decryptTex,
} = require('./kryptografia');

const SALT = 'salt';
(async () => {
  const encrypted = await encryptText('raz dwa trzy baba jaga patrzy', 'Haselko', SALT);
  console.log(encrypted);
  const decrypted = await decryptTex(encrypted.encrypted, 'Haselko', SALT, encrypted.iv);
  console.log(decrypted);
})();
