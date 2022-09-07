// const btn = document.querySelector('.btn-toggle-color');
// const body = document.querySelector('body');
// const h1 = document.querySelector('.counter')
//
// let counter = 0;
//
// btn.addEventListener('click', () => {
//     const isDarkMode = body.classList.toggle('black-mode');
//     if (isDarkMode) {
//         btn.innerText = "Dark-mode";
//         // counter++;
//     } else {
//         btn.innerText = "Light-mode";
//         // counter++;
//     }
//     h1.innerText = `${(++counter)}`;
// });
//

// Get last visit date
const lastSavedVisitDate = localStorage.getItem('last-visit');

if (lastSavedVisitDate === null) {
  console.log('Hi, you are first time here');
} else console.log(`You were here last time on: ${lastSavedVisitDate}`);

// set last visit date
// const date = new Date();
// const dateString = date.toString();
//
// localStorage.setItem('last-visit', dateString);
//
// const btn = document.querySelector('.btn-toggle-color');
// const body = document.querySelector('body');
// const h1 = document.querySelector('.counter')

// zadanie z licznikiem zapisujacym sie w local storage
// const btn = document.querySelector('.btn-toggle-color');
// const body = document.querySelector('body');
// const h1 = document.querySelector('h1');
//
// let counter = Number(localStorage.getItem('counter'));
// h1.innerText = counter.toString();
//
// btn.addEventListener('click', () => {
//     h1.innerText = ++counter;
//     localStorage.setItem('counter', counter.toString());
// });
//

// krotki program
const h1 = document.querySelector('.counter');
const personInfo = localStorage.getItem('person-Info');

if (personInfo === null) {
  const name = prompt('what is your name');
  const surname = prompt('what is your lastname');
  const person = {
    name,
    surname,
  };
  localStorage.setItem('person-Info', JSON.stringify(person));
  h1.innerText = `${name} ${surname}`;
} else {
  const oldPerson = JSON.parse(personInfo);
  const { name, surname } = oldPerson;
  h1.innerText = `${name} ${surname}`;
}
