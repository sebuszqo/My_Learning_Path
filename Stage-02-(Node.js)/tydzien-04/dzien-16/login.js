const {
  hash,
  compare,
} = require('bcrypt');

const passwd = process.argv[2];
const VALIDPWD = '$2b$10$ahZl6n6SkvFvroCymaMqvuAYBn43RQtSAaiSK/8izeHCDkQLCX4x.';

// wystarczy tylko porownac juz posiadany hash
hash(`${passwd}`, 10, (error, hashed) => {
  if (error) {
    console.log(' Something went wrong');
  }
});

compare(passwd, VALIDPWD, (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log('logged in');
  } else {
    console.log('something went wrong');
  }
});
