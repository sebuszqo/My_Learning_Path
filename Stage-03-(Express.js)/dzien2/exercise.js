const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.get('user-agent')} from first simple back-end server`);
})

app.listen(3000);


// same thing but written in clear node.js
//
//
// const {createServer} = require('http');
// const server = createServer();
// server.on('request', async (request, response) => {
//     if (request.url === '/') {
//         response.writeHead(200, {
//             'Content-Type': 'text/plain',
//         });
//         response.end(`Hello ${request.headers['user-agent']} from back-end without express`);
//     }
// });
// server.listen(3000, 'localhost');
//
//
//
//

