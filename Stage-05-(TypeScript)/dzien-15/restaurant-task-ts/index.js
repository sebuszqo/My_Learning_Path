import { Restaurant } from "./restaurant.ts";
const megaRestaurant = new Restaurant();
let tablesCount = 25;
megaRestaurant
    .on('open', () => console.log('Otwarto restaurację.'))
    .on('close', () => console.log('Zamknięto restaurację.'))
    .on('tableCountUpdate', change => {
    tablesCount += change;
    console.log(`Dostepnych stolików ${tablesCount}.`);
});
megaRestaurant.open(); // "Otwarto restaurację."
megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."
megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."
//# sourceMappingURL=index.js.map