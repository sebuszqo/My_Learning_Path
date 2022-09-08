const { exec } = require('child_process');

exec('node log.js', (error, stdout, stderr) => {
  if (error) {
    console.error('Oh no', error);
  } else if (stderr) {
    console.error('Error in App', stderr);
  } else {
    console.log('Program has finished', stdout);
  }
});
