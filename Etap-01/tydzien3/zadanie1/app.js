const goodBtn = document.querySelector('.good');
const badBtn = document.querySelector('.bad');
const para = document.querySelector('.para');

const goodP = document.querySelector('.good-counter');
const badP = document.querySelector('.bad-counter');

let counter = localStorage.getItem('counter');

if (counter === null) {
  counter = {
    moodGood: 0,
    moodBad: 0,
  };
} else {
  counter = JSON.parse(counter);
}

function showInfo() {
  para.innerText = `Do tej pory kliknieto ${counter.moodGood} razy dobrze, oraz ${counter.moodBad} źle! `;
}

showInfo();

function saveInfo() {
  localStorage.setItem('counter', JSON.stringify(counter));
}

goodBtn.addEventListener('click', () => {
  counter.moodGood++;
  showInfo();
  saveInfo();
});
badBtn.addEventListener('click', () => {
  counter.moodBad++;
  showInfo();
  saveInfo();
});

// // rozwiazanie zadania nr 1 moje
// goodBtn.addEventListener('click', () => {
//     let localGood = Number(localStorage.getItem('Good'));
//     if (localGood === null) {
//         localStorage.setItem('Good', '0')
//     }
//     goodP.innerHTML = `Good button were clicked: ${++localGood}`;
//     localStorage.setItem('Good', `${localGood}`)
// })
//
// badBtn.addEventListener('click', () => {
//     let localBad = Number(localStorage.getItem('Bad'));
//     if (localBad === null) {
//         localStorage.setItem('Bad', '0')
//     }
//     badP.innerHTML = `Bad button were clicked: ${++localBad}`;
//     localStorage.setItem('Bad', `${localBad}`)
// })
