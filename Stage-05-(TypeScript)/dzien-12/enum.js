var Gender;
(function (Gender) {
    Gender[Gender["Woman"] = 0] = "Woman";
    Gender[Gender["Man"] = 1] = "Man";
    Gender[Gender["Xyz"] = 2] = "Xyz";
})(Gender || (Gender = {}));
var Gender2;
(function (Gender2) {
    Gender2["Woman"] = "Kobieta";
    Gender2["Man"] = "M\u0119\u017Cczyzna";
    Gender2["Xyz"] = "Xyz";
})(Gender2 || (Gender2 = {}));
for (const key in Gender) {
    if (Number.isNaN(Number(key))) {
        console.log(key);
    }
}
// console.log(Gender.Man)
//# sourceMappingURL=enum.js.map