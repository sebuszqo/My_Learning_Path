const { EventEmitter } = require('events');

// function tickTock() {
//   const ee = new EventEmitter();
//
//   setInterval(() => {
//     ee.emit('secondElapsed', 'Test');
//   }, 1000);
//
//   setInterval(() => {
//     ee.emit('fiveSecondElapsed');
//   }, 5000);
//   return ee;
// }
//
// module.exports = {
//   tickTock,
// };

class TickTok extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('secondElapsed', 'Test');
    }, 1000);

    setInterval(() => {
      this.emit('fiveSecondElapsed');
    }, 5000);
  }
}

module.exports = {
  TickTok,
};
