const { setTimeout } = require('timers/promises');// zaimportuj tak jakby to co potrzebujemy

// const intervalId =setInterval(() => console.log("cyk!"), 100);
//
// (async () => {
//     console.log('Hi!');
//     await setTimeout(1000);
//     console.log('Hello')
//     clearInterval(intervalId)
//
// })();

// OCZEKWIANIE NA WSZYSTKO async ==> z automatu robi sie promise

async function brewTea() {
  console.log('Brewing tea ...');
  await setTimeout(1000);
  console.log('Tea is ready');
}

async function orderKeyboard() {
  console.log('Ordering and waiting for package...');
  await setTimeout(1000);
  console.log('Key board has arrived!');
}

(async () => {
  await Promise.all([brewTea(), orderKeyboard()]);
  console.log('Finished!');
})();
