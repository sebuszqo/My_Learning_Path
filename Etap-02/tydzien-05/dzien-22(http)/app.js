const {createServer} = require('http');
const {readFile} = require('fs').promises;
//
// createServer()
//   .listen(3000, '127.0.0.1');

// createServer((request, response) => {
//   response.writeHead(200, {
//     'Content-Type': 'text/html',
//   });
//   response.end('<h1>Hello from me</h1>');
// })
//   .listen(3000, '127.0.0.1');

const server = createServer();
server.on('request', async (request, response) => {
    const html = await readFile('./index.html', 'utf-8');
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.end(html);
});
server.listen(3000, 'localhost');
