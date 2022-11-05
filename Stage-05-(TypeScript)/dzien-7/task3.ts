// Otypuj poniższy kod, następie napisz pętlę, która będzie wypisywała wartość po kolei wszystkich elementów pojedynczo w konsoli.
// Spróbuj użyć różnych typów pętli. //forEach, for...i, for...in, for...of
// Zwróć uwagę na to jak edytor sprawnie podpowiada Ci w pracy.
// W kodzie jest błąd - powinno to być widać i łatwo możesz go naprawić.

interface Product {
    name: string;
    count: number;
    pricePerOne: number;
    vat: number
}

function showItems(items: Product[]): void { // Ew. typy dodaj wyłącznie tutaj
    //forEach, for...i, for...in, for...of
    items.forEach((value, index, arr) => {
        console.log(value.name, (value.count * value.pricePerOne * (1 + value.vat / 100)).toFixed(2))
    })
    for (let i = 0; i < items.length; i++) {
        const el = items[i];
        console.log(el.name, (el.count * el.pricePerOne * (1 + el.vat / 100)).toFixed(2))
    }
    console.log('3')
    for (const el of items) {
        console.log(el.name, (el.count * el.pricePerOne * (1 + el.vat / 100)).toFixed(2))
    }

    for (const key in items) {
        console.log(key)
        const el = items[key]
        console.log(el.name, (el.count * el.pricePerOne * (1 + el.vat / 100)).toFixed(2))
    }

}

showItems([
    {
        name: 'Pomarańcze luz',
        count: 1.2,
        pricePerOne: 1,
        vat: 0,
    },
    {
        name: 'Opony komplet',
        count: 1,
        pricePerOne: 800,
        vat: 23,
    },
    {
        name: 'MP3 Player Manta 256MB',
        count: 1,
        pricePerOne: 75,
        vat: 23,
    },
    {
        name: 'Baton "Mega Kursowy Baton Masło Orzechowe"',
        count: 5,
        pricePerOne: 2,
        vat: 23,
    },
]);