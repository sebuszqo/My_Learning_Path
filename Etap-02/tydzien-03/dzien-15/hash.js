// const { createHmac } = require('crypto');
//
// const salt = 'saddacacacas'; // nasza "sól" :)
// const hash = createHmac('sha512', salt)
//   .update('')
//   .digest('hex');
// console.log(hash);

// const { pbkdf2 } = require('crypto'); // pobiera algorytm na podstawie hashu
//
// const originalText = 'Hello world';
// const salt = 'FKJSDNKFJSNKFSNSJ';
//
// pbkdf2(originalText, salt, 100000, 64, 'sha512', (err, deriviedKey) => {
//   if (err) throw err;
//   console.log(deriviedKey.toString('hex'));
// });

const {
  hash,
  compare,
} = require('bcrypt');

hash('tekst do zahashowania', 10, (err, hashed) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hashed);
  }
  compare('tekst do zahashowania', hashed, (err, res) => {
    if (res) {
      console.log('logged in');
      // password match
    } else {
      console.log('nope');
      console.error(err);
      // password don't match
    }
  });
});
