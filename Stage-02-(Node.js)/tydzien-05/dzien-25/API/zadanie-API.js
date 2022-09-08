// dopisac funkcjonalnosci zapisujące i odczytujące liczbę wejść do pliku

const { createServer } = require('http');
const { calculator } = require('./calc');

const server = createServer();

server.on('request', (req, res) => {
  // const tab = req.url.split('/');
  // const sign = tab[1];
  // const first = Number(tab[2]);
  // const second = Number(tab[3]);
  const [, sign, first, second] = req.url.split('/');
  const result = calculator(sign, Number(first), Number(second));
  res.writeHead(200, {
    'Content-type': 'text/plain',
  });
  res.end(`${result}`);
});
server.listen(3000, 'localhost');
