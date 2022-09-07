const {readFile} = require('fs');

readFile('./index.html', 'utf8', (err, file) => console.log(file));
