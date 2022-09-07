const express = require('express');


const app = express();

app.get('/', () => {
    console.log("Wyswietl liczbę książek");
});
app.post('/', () => {
    console.log("dodaj nowa ksiązke do listy");
});


// app.get('/hello', () => {
//     console.log("Hello but after /hello!")
// });

app.listen(3000);
