console.log('boil water... ');

setTimeout(() => {
  console.log('Water is ready');
  console.log('Brew the tea...');

  setTimeout(() => {
    console.log('Tea is ready!');

    console.log('wait for good temperature...');

    setTimeout(() => {
      console.log('Perfect tea is ready!');
    }, 500);
  }, 1000);
}, 1000);

promises;
