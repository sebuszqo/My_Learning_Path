const { Restaurant } = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

// Tutaj dodaj nasłuchiwanie

megaRestaurant
  .once('opened', () => {
    console.log('Restaurant is opened');
  })
  .once('close', () => {
    console.log('Restaurant is closed');
  })
  .on('subTable', () => {
    // eslint-disable-next-line no-plusplus
    console.log(`Number of tables: ${--tablesCount}.`);
  })
  .on('addTable', () => {
    // eslint-disable-next-line no-plusplus
    console.log(`Number of tables: ${++tablesCount}.`);
  });

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
