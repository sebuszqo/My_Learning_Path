const {readFile} = require('fs').promises;
const {createServer} = require('http');

const server = createServer();
server.on('request', async (request, response) => {
    const html = await readFile('./index.html', 'utf-8');
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.end(html);
});
server.listen(3000, 'localhost');

// 'Content-Type': 'application/json'
// 'Content-Type': 'text/css'
// 'Content-Type': 'text/plain'
// 'Content-Type': 'text/html'
// 'Content-Type': 'text/html; charset=utf-8'
// 'Content-Type': 'video/mp4'
// 'Content-Type': 'image/png'
// 'Content-Type': 'image/jpeg'
