export class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        this.emit('open');
    }
    /**
     * Zamknięcie restauracji.
     */
    close() {
        this.emit('close');
    }
    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        this.emit('tableCountUpdate', -1);
    }
    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        this.emit('tableCountUpdate', 1);
    }
    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        this.emit('tableCountUpdate', -1);
    }
    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        this.emit('tableCountUpdate', -1);
    }
    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        this.emit('tableCountUpdate', 1);
    }
}
//# sourceMappingURL=restaurant.js.map