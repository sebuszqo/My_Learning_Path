// type TwoNumbersSign = '+'| "-"| '*' | "/";
// type OneNumbersSign = '++'| "--";
var TwoNumbersSing;
(function (TwoNumbersSing) {
    TwoNumbersSing[TwoNumbersSing["Plus"] = 0] = "Plus";
    TwoNumbersSing[TwoNumbersSing["Minus"] = 1] = "Minus";
    TwoNumbersSing[TwoNumbersSing["Multiply"] = 2] = "Multiply";
    TwoNumbersSing[TwoNumbersSing["Divide"] = 3] = "Divide";
})(TwoNumbersSing || (TwoNumbersSing = {}));
var OneNumbersSing;
(function (OneNumbersSing) {
    OneNumbersSing[OneNumbersSing["Inc"] = 0] = "Inc";
    OneNumbersSing[OneNumbersSing["Dec"] = 1] = "Dec";
})(OneNumbersSing || (OneNumbersSing = {}));
// Nie modyfikuj w ogóle kodu poniżej - stwórz interfejs tak, aby pasował wszędzie
const a = {
    a: 1,
    b: 2,
    sign: TwoNumbersSing.Plus,
};
const b = {
    a: 1,
    b: 2,
};
const c = {
    a: '1',
    b: '2',
    sign: TwoNumbersSing.Divide,
};
const d = {
    a: 1,
    sign: OneNumbersSing.Dec,
};
const e = {
    a: 1,
    sign: OneNumbersSing.Inc,
};
// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /
// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót
// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów
function calc({ a, b, sign }) {
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
//# sourceMappingURL=task1.js.map