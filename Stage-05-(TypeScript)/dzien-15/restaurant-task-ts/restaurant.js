import * as EventEmitter from "events";
import { RestaurantEvents } from "./types/events";
export class Restaurant extends EventEmitter {
    changeTableCount(incDec) {
        this.emit(RestaurantEvents.TableCountUpdate, incDec);
    }
    /**
     * Otwarcie restauracji.
     */
    open() {
        this.emit(RestaurantEvents.Open);
    }
    /**
     * Zamknięcie restauracji.
     */
    close() {
        this.emit(RestaurantEvents.Close);
    }
    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        // (this.emit as RestaurantTableCountChangeEvent)(RestaurantEvents.TableCountUpdate, -1);
        this.changeTableCount(-1);
    }
    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        // this.emit(RestaurantEvents.TableCountUpdate, 1);
        this.changeTableCount(1);
    }
    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        // this.emit(RestaurantEvents.TableCountUpdate, -1);
        this.changeTableCount(-1);
    }
    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        // this.emit(RestaurantEvents.TableCountUpdate, -1);
        this.changeTableCount(-1);
    }
    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit(RestaurantEvents.TableCountUpdate, 1);
    }
}
//# sourceMappingURL=restaurant.js.map