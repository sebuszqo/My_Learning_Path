const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  // mozna jescze bardziej skrocic przekazujac 2 argument jako odejmowanie lub dodawanie stolika
  open() {
    this.emit('opened');
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    // Emit...
    this.emit('close');
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */

  addTable() {
    this.emit('addTable');
  }

  substractTable() {
    this.emit('subTable');
  }

  reserveTable() {
    // Emit...
    this.substractTable();
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    // Emit...
    this.addTable();
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    // Emit...
    this.substractTable();
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    // Emit...
    this.substractTable();
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    // Emit...
    this.addTable();
  }
}

module.exports = {
  Restaurant,
};
