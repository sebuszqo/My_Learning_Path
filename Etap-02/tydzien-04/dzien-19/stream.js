// const {
//   createReadStream,
//   createWriteStream,
// } = require('fs');
// const { pipeline } = require('stream').promises;
//
// (async () => {
//   const openFileStream = createReadStream('logo1.png');
//
//   const writeFileStrem = createWriteStream('logo2.png');
//
//   await pipeline(
//     openFileStream,
//     writeFileStrem,
//   );
//   console.log('Done!');
// })();
//
// const {
//   createWriteStream,
//   createReadStream,
// } = require('fs');
//
// const r = createReadStream('logo1.png');
// const w = createWriteStream('logo3.png');
//
// r.pipe(w);
// r.on('end', () => console.log('Ready!'));

const {
  createWriteStream,
  createReadStream,
} = require('fs');

const r = createReadStream('logo1.png');
const w = createWriteStream('logo3.png');

r.on('data', (data) => w.write(data));
r.on('end', () => {
  w.close();
  console.log('Ready!');
});
