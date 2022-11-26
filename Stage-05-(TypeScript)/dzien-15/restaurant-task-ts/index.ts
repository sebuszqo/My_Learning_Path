import {Restaurant} from "./restaurant";
import {RestaurantEvents} from "./types/events";


const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .on(RestaurantEvents.Open, () => console.log('Otwarto restaurację.'))
    .on(RestaurantEvents.Close, () => console.log('Zamknięto restaurację.'))
    .on(RestaurantEvents.TableCountUpdate, (change:number) => {
        tablesCount += change;
        console.log(`Dostepnych stolików ${tablesCount}.`);
    });

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."