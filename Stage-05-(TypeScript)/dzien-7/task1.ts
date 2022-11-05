// type TwoNumbersSign = '+'| "-"| '*' | "/";
// type OneNumbersSign = '++'| "--";
enum TwoNumbersSing {
    Plus,
    Minus,
    Multiply,
    Divide,
}

enum OneNumbersSing {
    Inc,
    Dec,
}


interface TwoNumbersOperation {
    a: number | string;
    b: number | string;
    sign?: TwoNumbersSing;
}

interface OneNumbersOperation {
    a?: number | string;
    sign?: OneNumbersSing;
}

type CorrectType = TwoNumbersOperation | OneNumbersOperation;


// Nie modyfikuj w ogóle kodu poniżej - stwórz interfejs tak, aby pasował wszędzie

const a: CorrectType = {
    a: 1,
    b: 2,
    sign: TwoNumbersSing.Plus,
};

const b: CorrectType = {
    a: 1,
    b: 2,
};

const c: CorrectType = {
    a: '1',
    b: '2',
    sign: TwoNumbersSing.Divide,
};

const d: CorrectType = {
    a: 1,
    sign: OneNumbersSing.Dec,
};

const e: CorrectType = {
    a: 1,
    sign: OneNumbersSing.Inc,
};

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów

function calc({a, b, sign}: TwoNumbersOperation) {
    switch (sign) {
        case TwoNumbersSing.Plus:
            console.log(Number(a) + Number(b));
            break;
        case TwoNumbersSing.Minus:
            console.log(Number(a) - Number(b));
            break;
    }

    // if (sign === TwoNumbersSing.Plus){
    //     console.log(Number(a)+Number(b));
    // }
}