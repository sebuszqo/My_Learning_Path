const isbn = Number(prompt('What ISBN number do you want to check?'));

fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  .then((res) => res.json())
  .then((data) => {
    if (!data.items || data.items.length === 0) { // Zauważ, że dodaję tu walidację. Zauważyłem - debuggując console.log-iem, że kiedy książka nie istnieje to nie dostaję data.items lub jest ono pustą tablicą.
      console.log('Book not found!');
    } else {
      const { authors, title } = data.items[0].volumeInfo;
      console.log(`${title} by ${authors}`);
    }
  })
  .catch((err) => console.log('Błąd!', err));
