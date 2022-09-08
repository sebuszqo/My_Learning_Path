// dopisac funkcjonalnosci zapisujące i odczytujące liczbę wejść do pliku

const {createServer} = require('http');

const server = createServer();
let counter = 0;
server.on('request', (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/plain',
        });
        res.end(`${++counter}`);
    }
});
server.listen(3000, 'localhost');
