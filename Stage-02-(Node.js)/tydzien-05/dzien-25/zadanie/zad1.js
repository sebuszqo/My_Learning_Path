const {createServer} = require('http');
const {writeFile, readFile} = require('fs').promises;

const MyServer = createServer();

let counter = 0;

(async () => {
    try {
        counter = await readFile('./counter.txt', 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') { //IF FILE DOES NOT EXIST
            console.log('FILE DOES NOT EXIST, so i created new one and we are starting from 1');
        } else {
            console.log('Error occurred', error);
        }
    }
})();

MyServer.on('request', async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/plain',
        });
        res.end(`${++counter}`);
    }
    await writeFile('./counter.txt', String(counter), 'utf-8');
});
MyServer.listen(3000, 'localhost'); //127.0.0.1
