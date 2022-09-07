const express = require('express')
const {readFile, writeFile} = require('fs').promises;
const rateLimit = require('express-rate-limit');
const app = express();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 2,
})

app.use(limiter);

let name;

app.get('/name/set/:name?', async (req, res) => {
    name = req.params.name;
    await writeFile('name.txt', name, "utf8");
    if (!name) {
        res.send('You are a ghost?');
        name = '';
    } else {
        res.send(name);
    }
    console.log(name)
});

app.get('/name/show', async (req, res) => {
    try {
        name = await readFile('name.txt', 'utf8');
        res.send('There is a name saved in file')
    } catch (e) {
        res.send('There is no valid name, try /name/set/(    yourname) to set your name ')
    }
});

app.get('/name/check', async (req, res) => {
    try {
        await readFile('name.txt', 'utf8');
        res.send('Your name exists')
    } catch (e) {
        res.send('Your name does not exist.')
    }
});

app.listen(3000)
