const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// exec('dir')
//   .then(({
//     stdout,
//     stderr,
//   }) => {
//     console.log(stdout);
//     console.log(stderr);
//   });

// (async () => {
//   const data = await exec('ping 8.8.8.8');
//   console.log(data.stdout);
// })();

// (async () => {
//   try {
//     const ip = process.argv[2];
//     const { stdout } = await exec(`ping  ${ip}`);
//     console.log(stdout);
//   } catch (err) {
//     console.error('oh no', err);
//   }
// })();

(async () => {
  try {
    const { stdout } = await exec(
      'npm i',
      {
        timeout: 1000 * 60 * 60,
      },
    );
    console.log(stdout);
  } catch (err) {
    console.error('oh no', err);
  }
})();
