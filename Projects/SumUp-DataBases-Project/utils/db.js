const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root', // for mac mamp
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // for mac mamp
    database: 'santa-gifts', // database that I use in this app
    decimalNumbers: true, // zmienno przecinkowe liczby
    namedPlaceholders: true, // dane pochodzace od uzytkownika przekazywane w sposob bezpieczny !
})


module.exports = {
    pool
}