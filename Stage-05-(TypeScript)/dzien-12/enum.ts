enum Gender {
    Woman,
    Man,
    Xyz,
}

enum Gender2 {
    Woman = 'Kobieta',
    Man = 'Mężczyzna',
    Xyz = 'Xyz',
}


for (const key in Gender) {
    if (Number.isNaN(Number(key))) {
        console.log(key)
    }
}
// console.log(Gender.Man)