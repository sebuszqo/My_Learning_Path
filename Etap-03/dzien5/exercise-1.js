const express = require('express')
const {readFile, writeFile} = require('fs').promises;
const app = express();

app.get('/calc/:firstNum/:secondNum', async (req, res) => {
    let sum = parseInt(req.params.firstNum) + parseInt(req.params.secondNum)
    // const first = parseInt(req.params.firstNum);
    // const second = parseInt(req.params.secondNum);
    res.send(`${sum}`);
    console.log('Calc ended.');
    await writeFile('./last_number.txt', `${sum}`, 'utf8');
});

app.get('/old-calc/:number', async (req, res) => {
    const oldNum = Number(await readFile('./last_number.txt', 'utf8'));
    console.log(oldNum) // remember if file is empty --> oldNum = 0
    const newSum = Number(req.params.number) + oldNum;
    res.send(`${newSum}`);
    await writeFile('./last_number.txt', `${newSum}`, 'utf8');
})

app.listen(3000)
