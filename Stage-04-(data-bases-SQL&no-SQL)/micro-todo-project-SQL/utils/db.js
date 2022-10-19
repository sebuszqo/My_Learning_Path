const mysql = require("mysql2/promise");


const pool = mysql.createPool(  // create the connection to database
    {
        host: 'localhost',
        user: 'root',
        password: 'root', // for mac mamp
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // for mac mamp
        database: 'to_do_list', // database that I use in this app
        decimalNumbers: true,
        namedPlaceholders: true,
    });

module.exports = {
    pool,
}