const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

let sum = 0;
const summing = ((num) => sum += num);
const onlyFour = ((num) => { if (num >= 4) return true; });

grades
  .forEach(summing);
console.log(sum / grades.length);

grades
  .filter((grade) => grade >= 4)
  .forEach((grade) => console.log(grade));

const evenCities = (city) => city.length % 2 === 0;
const big = (city) => city.toUpperCase();
const show = (country) => console.log(country);

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

cities
  .filter(evenCities)
  .map(big)
  .forEach(show);
