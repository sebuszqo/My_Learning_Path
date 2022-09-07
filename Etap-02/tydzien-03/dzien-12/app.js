const { exec } = require('child_process');

// const cp = exec('ping 8.8.8.8'); // cp to ChildProcess
//
// cp.on('close', () => {
//   console.log('finished !');
// });
//
// cp.kill();
// const cp = exec('ping 8.8.8.8'); // cp to ChildProcess
//
// cp.stdout.on('data', (data) => {
//   console.log('Out>', data);
// });
//
// cp.stderr.on('data', (data) => {
//   console.log('Error>', data);
// });
//
// cp.on('close', () => {
//   console.log('finished !');
// });

exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error('Oh no', error);
  } else if (stderr) {
    console.error('Error in App', stderr);
  } else {
    console.log('Program has finished', stdout);
  }
});
