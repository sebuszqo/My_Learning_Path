// 1. Dodaj typy do programu.
// 2. Usuń błędy w wyznaczonym miejscu.
// *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.

interface Favorites {
    list: string[];

    first(): string | undefined;

    last(): string;

    add(url: string): void;

    remove(urlOrAll: string | true): void;
}

// Nie zmieniaj w klasie nic oprócz typów!
class Bookmarks implements Favorites {
    list: string[]

    constructor() {
        this.list = [];
    }

    first() {
        return this.list[0];
    }

    last(): string {
        return this.list[this.list.length - 1];
    }

    add(url: string): void {
        this.list.push(url);
    }

    remove(urlOrAll: string | true): void {
        if (urlOrAll === true) {
            this.list = [];
        } else {
            this.list = this.list.filter(bookmark => bookmark !== urlOrAll);
        }
    }
}

// Poniższy kod możesz zmieniać-tak, aby miał typy, sens i nie wywalał błędów :)
const favorites = new Bookmarks();

function createLink(bookmark: string): string {
    return `<a href="${bookmark}">${bookmark.substring(bookmark.indexOf('//') + 2)}</a>`;
}

favorites.add('https://wp.pl');
const firstLink = favorites.first()

if (firstLink) {
    console.log(createLink(firstLink));
}

favorites.remove('https://wp.pl');

const nextLink = favorites.first()

if (nextLink) {
    console.log(nextLink);
}

favorites.add('https://wp.pl');
favorites.add('https://onet.pl');
favorites.remove(true); // This should remove all
console.log('This should be true if list is empty', !favorites.first());