// const { tickTock } = require('./tick-tok');
//
// const events = tickTock();
//
// events
//   .once('secondElapsed', () => {
//     console.log('First');
//   })
//   .on('secondElapsed', () => {
//     console.log('one sec');
//   })
//   .on('fiveSecondElapsed', () => {
//     console.log('five sec');
//   });

const { TickTok } = require('./tick-tok');

new TickTok()
  .once('secondElapsed', () => {
    console.log('First');
  })
  .on('secondElapsed', () => {
    console.log('one sec');
  })
  .on('fiveSecondElapsed', () => {
    console.log('five sec');
  });
