const express = require('express');
const {IpCheck} = require('../utils/ip-check')

const voteRouter = express.Router();

const votes = {
    yes: 0,
    no: 0,
}

// let yesVotes = 0;
// let noVotes = 0;

// let ip = [];

const ipCheck = new IpCheck();

// wazna jest kolejnosc ze najpierw check bo inaczej zawsze bedzie lapac jako parametr
voteRouter
    .get('/check', async (req, res) => {

        const info = Object.entries(votes).map(arr => `Votes on ${arr[0]}: ${arr[1]}`).join(`<br>`);
        res.send(info);
    })
    .get('/:voteName', async (req, res) => {
        // if (ip.includes(req.ip)) {
        //     res.send(`You used your ability to vote!, Sorry you cannot do it again`);
        // }
        //
        // analogiczne rozwiązanie z użyciem klasy
        if (!ipCheck.check(req.ip)) {
            return res.status(403).send('You have already voted!');
        }

        const {voteName} = req.params;

        if (typeof votes[voteName] === 'undefined') {
            votes[voteName] = 0;
        }
        votes[voteName]++;

        // ip.push(req.ip);
        // console.log(ip);
        return res.send('Thanks for your vote!')
    })
// .get('/yes', (req, res) => {
//     yesVotes++
//     res.send(`Thanks for your vote!`);
// })
// .get('/no', (req, res) => {
//     noVotes++
//     res.send(`Thanks for your vote!`);
// })


module.exports = {
    voteRouter,
}
